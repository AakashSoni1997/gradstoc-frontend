import React from "react";

const Home = React.lazy(() => import("./../views/Pages/Home/Home"));
const DemoHome = React.lazy(() => import("./../views/Pages/DemoHome/Home"));
const Login = React.lazy(() => import("../views/Pages/Authentication/Login"));
const Register = React.lazy(() =>
  import("../views/Pages/Authentication/Register")
);
const ForgotPassword = React.lazy(() =>
  import("../views/Pages/Authentication/ForgotPassword")
);
const ResetPassword = React.lazy(() =>
  import("../views/Pages/Authentication/ResetPassword")
);
const OTP = React.lazy(() => import("../views/Pages/Authentication/Otp"));
const HowItWorks = React.lazy(() =>
  import("../views/Pages/HowItWorks/HowItWorks")
);
const Dashboard = React.lazy(() =>
  import("../views/Pages/Dashboard/Dashboard")
);
const UploadStudyResource = React.lazy(() =>
  import("../views/Pages/Dashboard/UploadStudyResource")
);
const Favorites = React.lazy(() =>
  import("../views/Pages/Dashboard/Favorites")
);
const CreateFlashCard = React.lazy(() =>
  import("../views/Pages/Dashboard/CreateFlashCard")
);
const Jobs = React.lazy(() => import("../views/Pages/Jobs/Jobs"));
const StudyResourcesDetail = React.lazy(() =>
  import("../views/Pages/Dashboard/StudyResourcesDetail")
);
const FlashCardDetail = React.lazy(() =>
  import("../views/Pages/Dashboard/FlashCardDetail")
);
const MyProfile = React.lazy(() =>
  import("../views/Pages/Dashboard/MyProfile")
);
const BrowseJob = React.lazy(() =>
  import("../views/Pages/BrowseJob/BrowseJob")
);
const Earning = React.lazy(() => import("../views/Pages/Dashboard/Earning"));
const StudyResources = React.lazy(() =>
  import("../views/Pages/Dashboard/StudyResources")
);
const Orders = React.lazy(() => import("../views/Pages/Dashboard/Orders"));
const Experts = React.lazy(() => import("../views/Pages/Dashboard/Experts"));
const GettingStart = React.lazy(() =>
  import("../views/Pages/PostingJob/GettingStart/GettingStart")
);
const JobDetails = React.lazy(() =>
  import("../views/Pages/PostingJob/JobDetails/JobDetails")
);
const Attachment = React.lazy(() =>
  import("../views/Pages/PostingJob/Attachment/Attachment")
);
const Review = React.lazy(() =>
  import("../views/Pages/PostingJob/Review/Review")
);
const BrowseJobBid = React.lazy(() =>
  import("../views/Pages/BrowseJob/BrowseJobBid")
);
const BidDetailsPage = React.lazy(() =>
  import("../views/Pages/BrowseJob/BidDetailsPage")
);
const Messages = React.lazy(() => import("../views/Pages/Messages/Messages"));
const Membership = React.lazy(() =>
  import("../views/Pages/Dashboard/Account/Membership")
);
const EmailandNotification = React.lazy(() =>
  import("../views/Pages/Dashboard/Account/EmailandNotification")
);
const ProfileSetting = React.lazy(() =>
  import("../views/Pages/Dashboard/Settings/ProfileSetting")
);
const ChangePassword = React.lazy(() =>
  import("../views/Pages/Dashboard/Settings/ChangePassword")
);
const AskQuestionDetail = React.lazy(() =>
  import("../views/Pages/PostingJob/AskQuestionDetail/AskQuestionDetail")
);
const AskQuetionAttachment = React.lazy(() =>
  import("../views/Pages/PostingJob/AskQuetionAttachment/AskQuetionAttachment")
);
const AskQuestionReview = React.lazy(() =>
  import("../views/Pages/PostingJob/AskQuestionReview/AskQuestionReview")
);
const Checkout = React.lazy(() =>
  import("../views/Pages/StudyResource/Checkout")
);
const UpGradeNow = React.lazy(() =>
  import("../views/Pages/UpGradeNow/UpGradeNow")
);
const BillingInformation = React.lazy(() =>
  import("../views/Pages/Dashboard/Account/BillingInformation")
);
const Dispute = React.lazy(() => import("../views/Pages/Dispute/Dispute"));
const DisputeDetails = React.lazy(() =>
  import("../views/Pages/Dispute/DisputeDetails")
);
const MySetting = React.lazy(() => import("../views/Pages/Setting/Setting"));
const PurchaseCourse = React.lazy(() =>
  import("../views/Pages/Dashboard/PurchaseCourse")
);
const Cart = React.lazy(() => import("../views/Pages/Cart/Cart"));
const PurchaseStudyResources = React.lazy(() =>
  import("../views/Pages/PurchaseStudyResources/PurchaseStudyResources")
);
const TransactionHistory = React.lazy(() =>
  import("../views/Pages/TransactionHistory/TransactionHistory")
);
const AccountSelect = React.lazy(() =>
  import("../views/Pages/AccountSelect/AccountSelect")
);
const UserSkill = React.lazy(() =>
  import("../views/Pages/AccountSelect/UserSkill/UserSkill")
);
const UserSkillSelect = React.lazy(() =>
  import("../views/Pages/AccountSelect/UseSkillSelect/UseSkillSelect")
);
const UserProfileDetails = React.lazy(() =>
  import("../views/Pages/AccountSelect/UserProfileDetails/UserProfileDetails")
);
const UserAboutDetails = React.lazy(() =>
  import("../views/Pages/AccountSelect/UserAboutDetails/UserAboutDetails")
);
const UserProfileMoreDetails = React.lazy(() =>
  import(
    "../views/Pages/AccountSelect/UserProfileMoreDetails/UserProfileMoreDetails"
  )
);
const UserAddress = React.lazy(() =>
  import("../views/Pages/AccountSelect/UserAddress/UserAddress")
);
const UserEmailVerification = React.lazy(() =>
  import(
    "../views/Pages/AccountSelect/UserEmailVerification/UserEmailVerification"
  )
);
const UserPaymentDetails = React.lazy(() =>
  import("../views/Pages/AccountSelect/UserPaymentDetails/UserPaymentDetails")
);
const UserPaymentMethod = React.lazy(() =>
  import(
    "../views/Pages/AccountSelect/UserPaymentDetails/UserPaymentMethod/UserPaymentMethod"
  )
);
const UserMembership = React.lazy(() =>
  import("../views/Pages/AccountSelect/UserMembership/UserMembership")
);
const HireAnExpert = React.lazy(() =>
  import("../views/Pages/HireAnExpert/HireAnExpert")
);
const HireAnExpertDetails = React.lazy(() =>
  import("../views/Pages/HireAnExpert/HireAnExpertDetails")
);
const Notifications = React.lazy(() =>
  import("../views/Pages/Notifications/Notifications")
);
const PaymentDetails = React.lazy(() =>
  import("../views/Pages/PaymentDetails/PaymentDetails")
);

// Admin
const AdminDashboard = React.lazy(() =>
  import("../views/Pages/Admin/Dashboard/Dashboard")
);
const AdminLogin = React.lazy(() =>
  import("../views/Pages/Admin/AdminAuth/AdminLogin")
);
const AdminForgotPassword = React.lazy(() =>
  import("../views/Pages/Admin/AdminAuth/ForgotPassword")
);
const AmdinUsers = React.lazy(() => import("../views/Pages/Admin/Users/Users"));
const AdminPendingJobs = React.lazy(() =>
  import("../views/Pages/Admin/Jobs/Pending/Pending")
);
const AdminCurrentJobs = React.lazy(() =>
  import("../views/Pages/Admin/Jobs/Current/Current")
);
const AdminPastJobs = React.lazy(() =>
  import("../views/Pages/Admin/Jobs/Past/Past")
);
const AdminClosedJobs = React.lazy(() =>
  import("../views/Pages/Admin/Jobs/Closed/Closed")
);
const AdminStudyResources = React.lazy(() =>
  import("../views/Pages/Admin/StudyResources/StudyResources")
);
const AdminPages = React.lazy(() => import("../views/Pages/Admin/Pages/Pages"));
const AdminSubscriptions = React.lazy(() =>
  import("../views/Pages/Admin/Subscriptions/Subscriptions")
);
const AdminOrders = React.lazy(() =>
  import("../views/Pages/Admin/Orders/Orders")
);
const AdminDispute = React.lazy(() =>
  import("../views/Pages/Admin/Dispute/Dispute")
);
const AdminReviews = React.lazy(() =>
  import("../views/Pages/Admin/Reviews/Reviews")
);
const AdminReports = React.lazy(() =>
  import("../views/Pages/Admin/Reports/Reports")
);
const AdminBlogs = React.lazy(() => import("../views/Pages/Admin/Blogs/Blogs"));
const AdminCoupons = React.lazy(() =>
  import("../views/Pages/Admin/Coupons/Coupons")
);
const AdminBannedWords = React.lazy(() =>
  import("../views/Pages/Admin/BannedWords/BannedWords")
);
const AdminEmail = React.lazy(() =>
  import("../views/Pages/Admin/Settings/Email/Email")
);
const AdminPayouts = React.lazy(() =>
  import("../views/Pages/Admin/Payouts/Payouts")
);

const routes = [
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "/home", exact: true, name: "Demo Home", component: DemoHome },
  { path: "/login", exact: true, name: "Login", component: Login },
  { path: "/register", exact: true, name: "Register", component: Register },
  {
    path: "/forgot-password",
    exact: true,
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/reset-password",
    exact: true,
    name: "Reset Password",
    component: ResetPassword,
  },
  { path: "/otp", exact: true, name: "OTP", component: OTP },
  {
    path: "/howitworks",
    exact: true,
    name: "HowItWorks",
    component: HowItWorks,
  },
  { path: "/dashboard", exact: true, name: "Dashboard", component: Dashboard },
  {
    path: "/uploadstudyresource",
    exact: true,
    name: "UploadStudyResource",
    component: UploadStudyResource,
  },
  {
    path: "/postingjob",
    exact: true,
    name: "Posting Job",
    component: GettingStart,
  },
  {
    path: "/jobdetail",
    exact: true,
    name: "Job Detail",
    component: JobDetails,
  },
  {
    path: "/attachment",
    exact: true,
    name: "Attachment",
    component: Attachment,
  },
  { path: "/review", exact: true, name: "Review", component: Review },
  {
    path: "/askquestiondetail",
    exact: true,
    name: "Ask Question Detail",
    component: AskQuestionDetail,
  },
  {
    path: "/askquestionattachment",
    exact: true,
    name: "Ask Question Attachment",
    component: AskQuetionAttachment,
  },
  {
    path: "/askquestionreview",
    exact: true,
    name: "Ask Question Review",
    component: AskQuestionReview,
  },
  { path: "/favorites", exact: true, name: "Favorites", component: Favorites },
  {
    path: "/createflashcard",
    exact: true,
    name: "CreateFlashCard",
    component: CreateFlashCard,
  },
  { path: "/jobs", exact: true, name: "Jobs", component: Jobs },
  {
    path: "/studyresourcesdetail",
    exact: true,
    name: "StudyResourcesDetail",
    component: StudyResourcesDetail,
  },
  {
    path: "/flashcarddetail",
    exact: true,
    name: "FlashCardDetail",
    component: FlashCardDetail,
  },
  { path: "/myprofile", exact: true, name: "MyProfile", component: MyProfile },
  { path: "/browsejob", exact: true, name: "BrowseJob", component: BrowseJob },
  { path: "/earning", exact: true, name: "Earning", component: Earning },
  {
    path: "/studyresources",
    exact: true,
    name: "StudyResources",
    component: StudyResources,
  },
  { path: "/orders", exact: true, name: "Orders", component: Orders },
  { path: "/experts", exact: true, name: "Experts", component: Experts },
  {
    path: "/browsejobbid",
    exact: true,
    name: "Browse Job Bid",
    component: BrowseJobBid,
  },
  {
    path: "/biddetailspage",
    exact: true,
    name: "Bid Details Page",
    component: BidDetailsPage,
  },
  { path: "/messages", exact: true, name: "Messages", component: Messages },
  {
    path: "/membership",
    exact: true,
    name: "Membership",
    component: Membership,
  },
  {
    path: "/billing-info",
    exact: true,
    name: "Billing Information",
    component: BillingInformation,
  },
  {
    path: "/emailandnotification",
    exact: true,
    name: "Email and Notification",
    component: EmailandNotification,
  },
  {
    path: "/profile-setting",
    exact: true,
    name: "Profile Setting",
    component: ProfileSetting,
  },
  {
    path: "/change-password",
    exact: true,
    name: "Change Password",
    component: ChangePassword,
  },
  { path: "/checkout", exact: true, name: "Checkout", component: Checkout },
  {
    path: "/upgrade-now",
    exact: true,
    name: "Upgrade Now",
    component: UpGradeNow,
  },
  { path: "/dispute", exact: true, name: "Dispute", component: Dispute },
  {
    path: "/dispute-details",
    exact: true,
    name: "Dispute Details",
    component: DisputeDetails,
  },
  { path: "/settings", exact: true, name: "Settings", component: MySetting },
  {
    path: "/purchase-course",
    exact: true,
    name: "Purchase Course",
    component: PurchaseCourse,
  },
  { path: "/cart", exact: true, name: "Cart", component: Cart },
  {
    path: "/purchase-study-resources",
    exact: true,
    name: "Purchase Study Resources",
    component: PurchaseStudyResources,
  },
  {
    path: "/transaction-history",
    exact: true,
    name: "Transaction History",
    component: TransactionHistory,
  },
  {
    path: "/account-select",
    exact: true,
    name: "Account Select",
    component: AccountSelect,
  },
  {
    path: "/user-skill",
    exact: true,
    name: "User Skill",
    component: UserSkill,
  },
  {
    path: "/user-skill-select",
    exact: true,
    name: "User Skill Select",
    component: UserSkillSelect,
  },
  {
    path: "/user-profile-details",
    exact: true,
    name: "User Profile Details",
    component: UserProfileDetails,
  },
  {
    path: "/user-about-details",
    exact: true,
    name: "User About Details",
    component: UserAboutDetails,
  },
  {
    path: "/user-profile-more-details",
    exact: true,
    name: "User Profile More Details",
    component: UserProfileMoreDetails,
  },
  {
    path: "/user-address",
    exact: true,
    name: "User Address",
    component: UserAddress,
  },
  {
    path: "/user-email-verification",
    exact: true,
    name: "User Email Verification",
    component: UserEmailVerification,
  },
  {
    path: "/user-payment-details",
    exact: true,
    name: "User Payment Details",
    component: UserPaymentDetails,
  },
  {
    path: "/user-payment-method",
    exact: true,
    name: "User Payment Method",
    component: UserPaymentMethod,
  },
  {
    path: "/user-membership",
    exact: true,
    name: "User Membership",
    component: UserMembership,
  },
  {
    path: "/hire-an-expert",
    exact: true,
    name: "Hire An Expert",
    component: HireAnExpert,
  },
  {
    path: "/hire-an-expert-profile",
    exact: true,
    name: "Hire An Expert Details",
    component: HireAnExpertDetails,
  },
  {
    path: "/notifications",
    exact: true,
    name: "Notifications",
    component: Notifications,
  },
  {
    path: "/payment-details",
    exact: true,
    name: "Payment Details",
    component: PaymentDetails,
  },

  // Admin
  {
    path: "/admin",
    exact: true,
    name: "Admin DashBoard",
    component: AdminDashboard,
  },
  {
    path: "/admin/login",
    exact: true,
    name: "Admin Login",
    component: AdminLogin,
  },
  {
    path: "/admin/forgot-password",
    exact: true,
    name: "Admin Forgot Password",
    component: AdminForgotPassword,
  },
  {
    path: "/admin/users",
    exact: true,
    name: "Admin Users",
    component: AmdinUsers,
  },
  {
    path: "/admin/pending-jobs",
    exact: true,
    name: "Admin Pending Jobs",
    component: AdminPendingJobs,
  },
  {
    path: "/admin/current-jobs",
    exact: true,
    name: "Admin Current Jobs",
    component: AdminCurrentJobs,
  },
  {
    path: "/admin/past-jobs",
    exact: true,
    name: "Admin Past Jobs",
    component: AdminPastJobs,
  },
  {
    path: "/admin/closed-jobs",
    exact: true,
    name: "Admin Closed Jobs",
    component: AdminClosedJobs,
  },
  {
    path: "/admin/study-resources",
    exact: true,
    name: "Admin Study Resources",
    component: AdminStudyResources,
  },
  {
    path: "/admin/pages",
    exact: true,
    name: "Admin Pages",
    component: AdminPages,
  },
  {
    path: "/admin/subscriptions",
    exact: true,
    name: "Admin Subscriptions",
    component: AdminSubscriptions,
  },
  {
    path: "/admin/orders",
    exact: true,
    name: "Admin Orders",
    component: AdminOrders,
  },
  {
    path: "/admin/dispute",
    exact: true,
    name: "Admin Dispute",
    component: AdminDispute,
  },
  {
    path: "/admin/reviews",
    exact: true,
    name: "Admin Reviews",
    component: AdminReviews,
  },
  {
    path: "/admin/payouts",
    exact: true,
    name: "Admin Payouts",
    component: AdminPayouts,
  },
  {
    path: "/admin/reports",
    exact: true,
    name: "Admin Reports",
    component: AdminReports,
  },
  {
    path: "/admin/blogs",
    exact: true,
    name: "Admin Blogs",
    component: AdminBlogs,
  },
  {
    path: "/admin/coupons",
    exact: true,
    name: "Admin Coupons",
    component: AdminCoupons,
  },
  {
    path: "/admin/banned-words",
    exact: true,
    name: "Admin Banned Words",
    component: AdminBannedWords,
  },
  {
    path: "/admin/setting/email",
    exact: true,
    name: "Admin Email",
    component: AdminEmail,
  },
];

export default routes;
