using ProjectX.WebAPI.Models.RestRequests.Request;
using ProjectX.WebAPI.Models.RestRequests.Response;

namespace ProjectX.WebAPI.Services
{
    public interface ITimelineService
    {

        public Task<List<CompanyTeamRestModel>> GetTimeline(TimelineRequest Request);

    }

    public class TimelineService : ITimelineService
    {
        private readonly IDatabaseService databaseService;

        public TimelineService(IDatabaseService DatabaseService)
        {
            databaseService = DatabaseService;
        }

        public async Task<List<CompanyTeamRestModel>> GetTimeline(TimelineRequest Request)
        {

            return await databaseService.GetTimeline(Request);

        }

    }

}
