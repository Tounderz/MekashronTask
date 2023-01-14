using Mekashron.Data.Models;

namespace Mekashron.Data.Interfaces
{
    public interface IAuthService
    {
        RegisterNewCustomerModel? GetCustomer(LoginModel model);
    }
}
