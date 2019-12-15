using System.Collections.Generic;

namespace SchedulerAPI.Models
{
    public class Lesson
    {
        public int LessonId {get;set;}
        public int SessionId {get;set;}
        public string Date {get; set;}
        public string MornAct {get;set;}
        public string Snack {get;set;}
        public string AftAct {get;set;}
       

    }
}