using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace SchedulerAPI.Models
{
    public class Participant
    {
        public int ParticipantId {get;set;}
        public int SessionId {get;set;}
        public string FirstName {get;set;}
        public string LastName {get;set;}
        public string ParentName {get;set;}
        public string DateOfBirth {get;set;}
        public string PhoneNumber {get; set;}
        public string Email {get; set;}
        public string EmergencyName {get; set;}
        public string EmergencyPhone {get; set;}
        public string LiabilityRelease {get; set;}
    }
}