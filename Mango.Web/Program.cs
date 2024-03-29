using Mango.Web.Service;
using Mango.Web.Service.IService;
using Mango.Web.Utility;
using Microsoft.AspNetCore.Authentication.Cookies;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddHttpContextAccessor();
builder.Services.AddHttpClient();
builder.Services.AddHttpClient<IcouponService,CouponService>();
builder.Services.AddHttpClient<IAuthService,AuthService>();
builder.Services.AddHttpClient<IProductService,ProductService>();
SD.CouponAPIBase = builder.Configuration["serviceUrls:CouponAPI"];
SD.AuthAPIBase = builder.Configuration["serviceUrls:AuthAPIBase"];
SD.ProductAPIBase = builder.Configuration["serviceUrls:ProductAPIBase"];

builder.Services.AddScoped<IBaseService,BaseService>();
builder.Services.AddScoped<IcouponService,CouponService>();
builder.Services.AddScoped<IAuthService,AuthService>();
builder.Services.AddScoped<ITokenProvider,TokenProvider>();
builder.Services.AddScoped<IProductService,ProductService>();
builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme).AddCookie(option =>
{
    option.ExpireTimeSpan = TimeSpan.FromHours(1);
    option.LoginPath = "/home/login";
    option.AccessDeniedPath = "/Auth/AccessDenied";
});
var policyName = "_myAllowSpecificOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: policyName, builder =>
    {
        builder.WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod()
           .AllowCredentials();
    });
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseDefaultFiles();
app.UseStaticFiles();

app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();

app.UseCors("_myAllowSpecificOrigins");

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.MapControllers();

app.MapFallbackToFile("/index.html");
app.Run();
