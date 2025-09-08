using Microsoft.AspNetCore.Builder;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/error.html"); // T?o error.html n?u mu?n
    app.UseHsts();
}

app.UseHttpsRedirection();

// Cho ph�p ph?c v? to�n b? file t?nh trong wwwroot (css/js/img/html...)
app.UseStaticFiles();

app.Run();
