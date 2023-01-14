using Mekashron.Data.Interfaces;
using Mekashron.Data.Models;
using MekashronServiceReference;
using Newtonsoft.Json;

namespace MekashronTask.API.Services
{
    public class AuthService : IAuthService
    {
        public RegisterNewCustomerModel? GetCustomer(LoginModel model)
        {
            var proxy = new ICUTechClient();
            var IPs = "";
            var result = proxy.Login(model.UserName, model.Password, IPs);
            var customerModel = JsonConvert.DeserializeObject<RegisterNewCustomerModel>(result);
            if (customerModel == null || string.IsNullOrEmpty(customerModel?.Email)) 
            {
                return null;
            }

            return customerModel;
        }
    }
}
