using Mekashron.Data.Interfaces;
using MekashronTask.API.Services;
using SoapCore;

var builder = WebApplication.CreateBuilder(args);
{
    builder.Services.AddCors();
    builder.Services.AddSoapCore();
    builder.Services.AddControllers();
    builder.Services.AddScoped<IAuthService, AuthService>();
}

var app = builder.Build();
{
    if (app.Environment.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
    }
    app.UseHttpsRedirection();
    app.UseDefaultFiles();
    app.UseStaticFiles();

    app.UseRouting();

    app.UseHttpsRedirection();

    app.UseAuthorization();

    app.UseCors(options => options
       .WithOrigins(new[] { "http://localhost:3000", "http://localhost:8080", "http://localhost:4200", "https://tounderz.github.io", "http://mekashrontask.42web.io" })
       .AllowAnyHeader()
       .AllowAnyMethod()
    );

    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
    });

    app.Run();
}