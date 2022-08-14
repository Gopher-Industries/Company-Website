using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using ProjectX.WebAPI.Models;
using ProjectX.WebAPI.Services;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Configuration.AddEnvironmentVariables();
builder.Services.Configure<ApplicationHostSettings>(builder.Configuration.GetSection("ApplicationHosting"));
builder.Services.Configure<ApplicationIdentitySettings>(builder.Configuration.GetSection("ApplicationIdentity"));
builder.Services.AddSingleton<ITokenService, TokenService>();
builder.Services.AddSingleton<INoSqlDatabaseService, FirestoreDatabase>();
builder.Services.AddSingleton<IEmailConfirmationService, GmailConfirmationService>();
builder.Services.AddSingleton<IPasswordEncryptionService, BCryptPasswordEncryptionService>();
builder.Services.AddMemoryCache(builder =>
{
    builder.SizeLimit = 50000000;
});

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
        IssuerSigningKey = new
        SymmetricSecurityKey
        (Encoding.UTF8.GetBytes
        (builder.Configuration["ApplicationIdentity:JWTSecret"]))
    };
    options.Events = new JwtBearerEvents();
    options.Events.OnTokenValidated = context =>
    {
        return Task.CompletedTask;
    };
    options.Events.OnForbidden = context =>
    {

        return Task.CompletedTask;
    };
    options.Events.OnAuthenticationFailed = context =>
    {

        return Task.CompletedTask;
    };
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.Services.GetRequiredService<IOptions<ApplicationHostSettings>>().Value.HostingUrl = Environment.GetEnvironmentVariable("ASPNETCORE_URLS")?.Split(';').FirstOrDefault();
}
else
{
    // It is in the staging / production environment. Use URLS specified in host settings
    app.Urls.Clear();
    app.Urls.Add(app.Configuration["ApplicationHosting:HostingUrl"]);
    Environment.SetEnvironmentVariable("ASPNETCORE_URLS", String.Join(';', app.Urls));
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseRouting();
app.UseAuthorization();

app.MapControllers();

app.Run();
