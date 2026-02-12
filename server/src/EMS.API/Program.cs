
using EMS.Infrastructure.persistence;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddOpenApi();
builder.Services.AddControllers();

var app = builder.Build();

// app.MapControllers();

app.UseHttpsRedirection();


app.Run();

