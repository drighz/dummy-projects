using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebChart.Startup))]
namespace WebChart
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
