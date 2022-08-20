using Google.Api;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using ProjectX.WebAPI.Models;
using ProjectX.WebAPI.Services;
using Swashbuckle.AspNetCore.Filters;
using System.Reflection;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

builder.Configuration.AddEnvironmentVariables();
builder.Services.Configure<ApplicationHostSettings>(builder.Configuration.GetSection("ApplicationHosting"));
builder.Services.Configure<ApplicationIdentitySettings>(builder.Configuration.GetSection("ApplicationIdentity"));
builder.Services.AddSingleton<ITokenService, TokenService>();
builder.Services.AddSingleton<IDatabaseService, FirestoreDatabase>();
builder.Services.AddSingleton<IEmailConfirmationService, GmailConfirmationService>();
builder.Services.AddSingleton<IAuthenticationService, BCryptAuthenticationService>();
builder.Services.AddSingleton<IDialogFlowService, DialogFlowService>();
builder.Services.AddMemoryCache(builder =>
{
    builder.SizeLimit = 50000000;
});
builder.Services.AddSwaggerGen(options =>
{

    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "ProjectX API",
        Version = "v1"
    });

    options.EnableAnnotations();
    options.ExampleFilters();

    var xmlFilename = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    options.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, xmlFilename));

    //options.DocumentFilter<>

});
//builder.Services.AddSwaggerExamplesFromAssemblyOf<Program>();
builder.Services.AddSwaggerExamples();
//
// Add JWT authentication bearer schema

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["ApplicationHosting:ExternalUrl"],
        ValidAudience = builder.Configuration["ApplicationHosting:ExternalUrl"],
        IssuerSigningKey = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(
                builder.Configuration["ApplicationIdentity:AccessJWTSecret"]
        ))
    };
});

// If we're not in development mode, startup the kesteral server and use our certificates!
if (builder.Environment.IsDevelopment() == false)
{

    // Remove default URL's
    builder.WebHost.UseUrls();

    builder.WebHost.UseKestrel(serverOptions =>
    {
        serverOptions.Listen(System.Net.IPAddress.Parse("0.0.0.0"), 443, listenOptions =>
        {
            listenOptions.UseHttps(Path.Combine(Environment.CurrentDirectory, "Credentials", "api_gopherindustries_net.pfx"), "G%9mZ#T&&lB&q0r#6wa10Nfg");
        });
    });
}

var app = builder.Build();

//// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
//    app.Services.GetRequiredService<IOptions<ApplicationHostSettings>>().Value.HostingUrl = Environment.GetEnvironmentVariable("ASPNETCORE_URLS")?.Split(';').FirstOrDefault();
//}

app.MapSwagger();
app.UseSwagger(options => options.SerializeAsV2 = true);
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseRouting();
app.UseAuthorization();

app.MapControllers();

app.Run();
