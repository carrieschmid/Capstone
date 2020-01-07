﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SchedulerAPI.Models;

namespace SchedulerAPI.Migrations
{
    [DbContext(typeof(SchedulerAPIContext))]
    [Migration("20200106223612_NewOne")]
    partial class NewOne
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("SchedulerAPI.Models.Lesson", b =>
                {
                    b.Property<int>("LessonId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AftAct");

                    b.Property<string>("Date");

                    b.Property<string>("MornAct");

                    b.Property<int>("SessionId");

                    b.Property<string>("Snack");

                    b.Property<int?>("VolunteerId");

                    b.HasKey("LessonId");

                    b.HasIndex("SessionId");

                    b.HasIndex("VolunteerId");

                    b.ToTable("Lessons");
                });

            modelBuilder.Entity("SchedulerAPI.Models.Participant", b =>
                {
                    b.Property<int>("ParticipantId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("DateOfBirth");

                    b.Property<string>("Email");

                    b.Property<string>("EmergencyName");

                    b.Property<string>("EmergencyPhone");

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<string>("LiabilityRelease");

                    b.Property<string>("ParentName");

                    b.Property<string>("PhoneNumber");

                    b.Property<int>("SessionId");

                    b.HasKey("ParticipantId");

                    b.HasIndex("SessionId");

                    b.ToTable("Participants");
                });

            modelBuilder.Entity("SchedulerAPI.Models.Session", b =>
                {
                    b.Property<int>("SessionId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Date");

                    b.Property<string>("Description");

                    b.Property<string>("LessonAdded");

                    b.Property<string>("Location");

                    b.Property<string>("Name");

                    b.Property<string>("Openings");

                    b.Property<string>("Selected");

                    b.Property<int>("VolunteerId");

                    b.HasKey("SessionId");

                    b.HasIndex("VolunteerId");

                    b.ToTable("Sessions");
                });

            modelBuilder.Entity("SchedulerAPI.Models.Volunteer", b =>
                {
                    b.Property<int>("VolunteerId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("BackgroundCheck");

                    b.Property<string>("Email");

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<string>("Password");

                    b.Property<string>("PhoneNumber");

                    b.Property<string>("Token");

                    b.Property<string>("TrainingCheck");

                    b.Property<string>("Username");

                    b.HasKey("VolunteerId");

                    b.ToTable("Volunteers");
                });

            modelBuilder.Entity("SchedulerAPI.Models.Lesson", b =>
                {
                    b.HasOne("SchedulerAPI.Models.Session")
                        .WithMany("Lessons")
                        .HasForeignKey("SessionId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SchedulerAPI.Models.Volunteer")
                        .WithMany("Lessons")
                        .HasForeignKey("VolunteerId");
                });

            modelBuilder.Entity("SchedulerAPI.Models.Participant", b =>
                {
                    b.HasOne("SchedulerAPI.Models.Session")
                        .WithMany("Participants")
                        .HasForeignKey("SessionId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("SchedulerAPI.Models.Session", b =>
                {
                    b.HasOne("SchedulerAPI.Models.Volunteer", "Volunteer")
                        .WithMany("Sessions")
                        .HasForeignKey("VolunteerId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
