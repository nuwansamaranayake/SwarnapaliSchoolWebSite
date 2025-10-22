import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  FileText, 
  TrendingUp, 
  Bell, 
  Calendar,
  Award,
  LogOut
} from "lucide-react";

interface StudentDashboardProps {
  language: string;
  onLogout: () => void;
}

export default function StudentDashboard({ language, onLogout }: StudentDashboardProps) {
  const content = {
    en: {
      welcome: "Welcome back",
      studentName: "Nimesha Perera",
      grade: "Grade 10-A",
      myCourses: "My Courses",
      assignments: "Upcoming Assignments",
      grades: "Recent Grades",
      notifications: "Notifications",
      viewAll: "View All",
      logout: "Logout"
    },
    si: {
      welcome: "ආපසු සාදරයෙන් පිළිගනිමු",
      studentName: "නිමේෂා පෙරේරා",
      grade: "10-A ශ්‍රේණිය",
      myCourses: "මගේ විෂයයන්",
      assignments: "ඉදිරි පැවරුම්",
      grades: "මෑත ශ්‍රේණි",
      notifications: "දැනුම්දීම්",
      viewAll: "සියල්ල බලන්න",
      logout: "පිටවීම"
    }
  };

  const c = content[language as keyof typeof content] || content.en;

  // TODO: remove mock data
  const courses = [
    { id: 1, name: language === 'en' ? "Mathematics" : "ගණිතය", progress: 75, color: "text-blue-500" },
    { id: 2, name: language === 'en' ? "Science" : "විද්‍යාව", progress: 85, color: "text-green-500" },
    { id: 3, name: language === 'en' ? "English" : "ඉංග්‍රීසි", progress: 60, color: "text-purple-500" },
    { id: 4, name: language === 'en' ? "History" : "ඉතිහාසය", progress: 90, color: "text-orange-500" },
  ];

  const assignments = [
    { id: 1, subject: language === 'en' ? "Mathematics" : "ගණිතය", title: language === 'en' ? "Algebra Problem Set" : "වීජීය ගැටළු", due: "2024-04-15", status: "pending" },
    { id: 2, subject: language === 'en' ? "Science" : "විද්‍යාව", title: language === 'en' ? "Lab Report" : "විද්‍යාගාර වාර්තාව", due: "2024-04-18", status: "pending" },
    { id: 3, subject: language === 'en' ? "English" : "ඉංග්‍රීසි", title: language === 'en' ? "Essay Writing" : "රචනාව", due: "2024-04-20", status: "submitted" },
  ];

  const grades = [
    { id: 1, subject: language === 'en' ? "Mathematics" : "ගණිතය", grade: "A", percentage: 85 },
    { id: 2, subject: language === 'en' ? "Science" : "විද්‍යාව", grade: "A+", percentage: 92 },
    { id: 3, subject: language === 'en' ? "History" : "ඉතිහාසය", grade: "B+", percentage: 78 },
  ];

  const notifications = [
    { id: 1, title: language === 'en' ? "Exam Schedule Released" : "විභාග කාලසටහන නිකුත් කර ඇත", time: "2h ago", category: "academic" },
    { id: 2, title: language === 'en' ? "Sports Day - March 20" : "ක්‍රීඩා දිනය - මාර්තු 20", time: "5h ago", category: "event" },
    { id: 3, title: language === 'en' ? "New Assignment Posted" : "නව පැවරුමක් පළ කර ඇත", time: "1d ago", category: "assignment" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground" data-testid="text-welcome">
                {c.welcome}, {c.studentName}
              </h1>
              <p className="text-muted-foreground" data-testid="text-grade">{c.grade}</p>
            </div>
            <Button 
              variant="ghost" 
              onClick={onLogout}
              className="hover-elevate active-elevate-2"
              data-testid="button-logout"
            >
              <LogOut className="w-4 h-4 mr-2" />
              {c.logout}
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover-elevate border-card-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{c.myCourses}</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="text-course-count">4</div>
              <p className="text-xs text-muted-foreground">
                {language === 'en' ? 'Active courses this semester' : 'මෙම අධ්‍යයන වර්ෂයේ ක්‍රියාකාරී විෂයයන්'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate border-card-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{c.assignments}</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="text-assignment-count">2</div>
              <p className="text-xs text-muted-foreground">
                {language === 'en' ? 'Due this week' : 'මේ සතියේ ඉදිරිපත් කළ යුතුය'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate border-card-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{language === 'en' ? 'Overall GPA' : 'සමස්ත ජී.පී.ඒ'}</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="text-gpa">3.85</div>
              <p className="text-xs text-muted-foreground">
                {language === 'en' ? 'Excellent performance' : 'විශිෂ්ට කාර්ය සාධනය'}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Card className="border-card-border">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span data-testid="text-my-courses">{c.myCourses}</span>
                  <Button variant="ghost" size="sm" className="hover-elevate">
                    {c.viewAll}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {courses.map((course) => (
                  <div key={course.id} className="space-y-2" data-testid={`course-${course.id}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">{course.name}</span>
                      <span className="text-sm text-muted-foreground">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-card-border">
              <CardHeader>
                <CardTitle data-testid="text-grades-title">{c.grades}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {grades.map((grade) => (
                  <div 
                    key={grade.id} 
                    className="flex items-center justify-between p-3 rounded-md bg-muted/50 hover-elevate"
                    data-testid={`grade-${grade.id}`}
                  >
                    <div>
                      <div className="font-medium text-foreground">{grade.subject}</div>
                      <div className="text-sm text-muted-foreground">{grade.percentage}%</div>
                    </div>
                    <Badge variant="secondary" className="text-lg">
                      {grade.grade}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-card-border">
              <CardHeader>
                <CardTitle data-testid="text-assignments-title">{c.assignments}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {assignments.map((assignment) => (
                  <div 
                    key={assignment.id} 
                    className="p-4 rounded-md border border-border hover-elevate"
                    data-testid={`assignment-${assignment.id}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-medium text-foreground">{assignment.title}</div>
                        <div className="text-sm text-muted-foreground">{assignment.subject}</div>
                      </div>
                      <Badge variant={assignment.status === 'submitted' ? 'default' : 'secondary'}>
                        {assignment.status === 'submitted' 
                          ? (language === 'en' ? 'Submitted' : 'ඉදිරිපත් කළා')
                          : (language === 'en' ? 'Pending' : 'පොරොත්තුවේ')
                        }
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {language === 'en' ? 'Due:' : 'දිනය:'} {new Date(assignment.due).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-card-border">
              <CardHeader>
                <CardTitle className="flex items-center" data-testid="text-notifications-title">
                  <Bell className="w-5 h-5 mr-2" />
                  {c.notifications}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className="p-3 rounded-md bg-muted/50 hover-elevate cursor-pointer"
                    data-testid={`notification-${notification.id}`}
                  >
                    <div className="font-medium text-foreground text-sm">{notification.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{notification.time}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
