using api.AuthService;
using api.Context;
using Microsoft.EntityFrameworkCore;
using SmartAutoSpares.Outcomes;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});
builder.Services.AddScoped<IAthenticationService, AuthenticationService>();
builder.Services.AddScoped<IHandler, Handler>();

//var connectionString = "Data Source=mssql-103808-0.cloudclusters.net,10003;Initial Catalog=SmartService;Persist Security Info=True;User ID=admin;Password=Autospares@2022;TrustServerCertificate=True";

var connectionString = "Server=localhost;Database=smartservices;Trusted_Connection=True;MultipleActiveResultSets=True;TrustServerCertificate=True";
builder.Services.AddDbContext<APIDbContext>(options => options.UseSqlServer(connectionString));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors();

app.Run();

