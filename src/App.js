import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import store from "./redux/store";
import { setCurrentUser } from "./redux/actions/authAction";

/* Layout */
const Layout = React.lazy(() => import("./containers/TheLayout"));
const AuthLayout = React.lazy(() => import("./containers/AuthLayout"));
const TheDashboardLayout = React.lazy(() =>
  import("./containers/TheDashboardLayout")
);
const TheInnerLayout = React.lazy(() => import("./containers/TheInnerLayout"));
const TheOuterLayout = React.lazy(() =>
  import("./containers/JobBrowse/TheOuterLayout")
);
const TheJobBrowseBidLayout = React.lazy(() =>
  import("./containers/JobBrowse/TheJobBrowseBidLayout")
);
const TheBidDetailLayout = React.lazy(() =>
  import("./containers/JobBrowse/TheBidDetailLayout")
);
const AskQuestionLayout = React.lazy(() =>
  import("./containers/AskQuestionLayout")
);
const MessagesLayout = React.lazy(() => import("./containers/MessagesLayout"));
const TheStudyResourceDetailLayout = React.lazy(() =>
  import("./containers/TheStudyResourceDetailLayout")
);
const TheCheckoutLayout = React.lazy(() =>
  import("./containers/TheCheckoutLayout")
);
const TheAdminLayout = React.lazy(() => import("./containers/TheAdminLayout"));
const TheUserSelectLayout = React.lazy(() =>
  import("./containers/TheUserSelectLayout")
);

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

if (localStorage.getItem("userData")) {
  const decoded = localStorage.getItem("userData");
  store.dispatch(setCurrentUser(decoded));
}

/* Pages */
// const PageNotFound = React.lazy(() => import('./views/Pages/PageNotFound/404'));

function App() {
  return (
    <Router>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            exact
            path="/"
            name="Home"
            render={(props) => <Layout {...props} />}
          />
          <Route
            exact
            path="/login"
            name="Login"
            render={(props) => <AuthLayout {...props} />}
          />
          <Route
            exact
            path="/register"
            name="Register"
            render={(props) => <AuthLayout {...props} />}
          />
          <Route
            exact
            path="/forgot-password"
            name="Forgot Password"
            render={(props) => <AuthLayout {...props} />}
          />
          <Route
            exact
            path="/reset-password"
            name="Reset Password"
            render={(props) => <AuthLayout {...props} />}
          />
          <Route
            exact
            path="/otp"
            name="OTP"
            render={(props) => <AuthLayout {...props} />}
          />
          <Route
            exact
            path="/howitworks"
            name="HowItWorks"
            render={(props) => <Layout {...props} />}
          />
          <Route
            exact
            path="/postingjob"
            name="Posting Job"
            render={(props) => <AskQuestionLayout {...props} />}
          />
          <Route
            exact
            path="/jobdetail"
            name="Job Detail"
            render={(props) => <AskQuestionLayout {...props} />}
          />
          <Route
            exact
            path="/attachment"
            name="Attachment"
            render={(props) => <AskQuestionLayout {...props} />}
          />
          <Route
            exact
            path="/review"
            name="Review"
            render={(props) => <AskQuestionLayout {...props} />}
          />
          <Route
            exact
            path="/dashboard"
            name="Dashboard"
            render={(props) => <TheDashboardLayout {...props} />}
          />
          <Route
            exact
            path="/uploadstudyresource"
            name="UploadStudyResource"
            render={(props) => <TheInnerLayout {...props} />}
          />
          <Route
            exact
            path="/favorites"
            name="Favorites"
            render={(props) => <TheDashboardLayout {...props} />}
          />
          <Route
            exact
            path="/createflashcard"
            name="CreateFlashCard"
            render={(props) => <TheInnerLayout {...props} />}
          />
          <Route
            exact
            path="/jobs"
            name="Jobs"
            render={(props) => <TheDashboardLayout {...props} />}
          />
          <Route
            exact
            path="/studyresourcesdetail"
            name="StudyResourcesDetail"
            render={(props) => <TheStudyResourceDetailLayout {...props} />}
          />
          <Route
            exact
            path="/flashcarddetail"
            name="FlashCardDetail"
            render={(props) => <TheStudyResourceDetailLayout {...props} />}
          />
          <Route
            exact
            path="/myprofile"
            name="MyProfile"
            render={(props) => <TheDashboardLayout {...props} />}
          />
          <Route
            exact
            path="/earning"
            name="Earning"
            render={(props) => <TheDashboardLayout {...props} />}
          />
          <Route
            exact
            path="/studyresources"
            name="StudyResources"
            render={(props) => <TheDashboardLayout {...props} />}
          />
          <Route
            exact
            path="/orders"
            name="Orders"
            render={(props) => <TheDashboardLayout {...props} />}
          />
          <Route
            exact
            path="/experts"
            name="Experts"
            render={(props) => <TheDashboardLayout {...props} />}
          />
          <Route
            exact
            path="/browsejob"
            name="BrowseJob"
            render={(props) => <TheOuterLayout {...props} name="Browse Jobs" />}
          />
          <Route
            exact
            path="/browsejobbid"
            name="Browse Job Bid"
            render={(props) => <TheJobBrowseBidLayout {...props} />}
          />
          <Route
            exact
            path="/biddetailspage"
            name="Bid Details Page"
            render={(props) => <TheBidDetailLayout {...props} />}
          />
          <Route
            exact
            path="/logout"
            name="Logout"
            render={(props) => <TheDashboardLayout {...props} />}
          />
          <Route
            exact
            path="/askquestiondetail"
            name="Ask Question Detail"
            render={(props) => <AskQuestionLayout {...props} />}
          />
          <Route
            exact
            path="/askquestionattachment"
            name="Ask Question Attachment"
            render={(props) => <AskQuestionLayout {...props} />}
          />
          <Route
            exact
            path="/askquestionreview"
            name="Ask Question Attachment"
            render={(props) => <AskQuestionLayout {...props} />}
          />
          <Route
            exact
            path="/messages"
            name="Messages"
            render={(props) => <MessagesLayout {...props} name="Messages" />}
          />
          <Route
            exact
            path="/membership"
            name="Membership"
            render={(props) => <TheDashboardLayout {...props} />}
          />
          <Route
            exact
            path="/billing-info"
            name="Billing Information"
            render={(props) => <TheDashboardLayout {...props} />}
          />
          <Route
            exact
            path="/emailandnotification"
            name="Email and Notification"
            render={(props) => <TheDashboardLayout {...props} />}
          />
          <Route
            exact
            path="/profile-setting"
            name="Profile Setting"
            render={(props) => <TheDashboardLayout {...props} />}
          />
          <Route
            exact
            path="/change-password"
            name="Change Password"
            render={(props) => <TheDashboardLayout {...props} />}
          />
          <Route
            exact
            path="/checkout"
            name="Checkout"
            render={(props) => <TheCheckoutLayout {...props} />}
          />
          <Route
            exact
            path="/upgrade-now"
            name="Upgrade Now"
            render={(props) => <MessagesLayout {...props} name="Upgrade Now" />}
          />
          <Route
            exact
            path="/dispute"
            name="Dispute"
            render={(props) => <MessagesLayout {...props} name="Dispute" />}
          />
          <Route
            exact
            path="/dispute-details"
            name="Dispute Details"
            render={(props) => <MessagesLayout {...props} name="Dispute" />}
          />
          <Route
            exact
            path="/settings"
            name="Settings"
            render={(props) => <MessagesLayout {...props} name="Settings" />}
          />
          <Route
            exact
            path="/purchase-course"
            name="Purchase Course"
            render={(props) => <TheDashboardLayout {...props} />}
          />
          <Route
            exact
            path="/cart"
            name="Cart"
            render={(props) => <MessagesLayout {...props} name="Cart" />}
          />
          <Route
            exact
            path="/purchase-study-resources"
            name="Purchase Study Resources"
            render={(props) => (
              <MessagesLayout {...props} name="Purchase Study Resources" />
            )}
          />
          <Route
            exact
            path="/transaction-history"
            name="Transaction History"
            render={(props) => (
              <MessagesLayout {...props} name="Transaction history" />
            )}
          />
          <Route
            exact
            path="/account-select"
            name="Account Select"
            render={(props) => <TheUserSelectLayout {...props} />}
          />
          <Route
            exact
            path="/user-skill"
            name="User Skill"
            render={(props) => <TheUserSelectLayout {...props} />}
          />
          <Route
            exact
            path="/user-skill-select"
            name="User Skill Select"
            render={(props) => <TheUserSelectLayout {...props} />}
          />
          <Route
            exact
            path="/user-profile-details"
            name="User Profile Details"
            render={(props) => <TheUserSelectLayout {...props} />}
          />
          <Route
            exact
            path="/user-about-details"
            name="User Profile Details"
            render={(props) => <TheUserSelectLayout {...props} />}
          />
          <Route
            exact
            path="/user-profile-more-details"
            name="User Profile More Details"
            render={(props) => <TheUserSelectLayout {...props} />}
          />
          <Route
            exact
            path="/user-address"
            name="User Address"
            render={(props) => <TheUserSelectLayout {...props} />}
          />
          <Route
            exact
            path="/user-email-verification"
            name="User Email Verification"
            render={(props) => <TheUserSelectLayout {...props} />}
          />
          <Route
            exact
            path="/user-payment-details"
            name="User Payment Details"
            render={(props) => <TheUserSelectLayout {...props} />}
          />
          <Route
            exact
            path="/user-payment-method"
            name="User Payment Method"
            render={(props) => <TheUserSelectLayout {...props} />}
          />
          <Route
            exact
            path="/user-membership"
            name="User Membership"
            render={(props) => <TheUserSelectLayout {...props} />}
          />
          <Route
            exact
            path="/hire-an-expert"
            name="Hire An Expert"
            render={(props) => (
              <TheOuterLayout {...props} name="Hire An Expert" />
            )}
          />
          <Route
            exact
            path="/hire-an-expert-profile"
            name="Hire An Expert Profile"
            render={(props) => <TheOuterLayout {...props} name="Profile" />}
          />
          <Route
            exact
            path="/notifications"
            name="Notifications"
            render={(props) => (
              <TheOuterLayout {...props} name="Notifications" />
            )}
          />
          <Route
            exact
            path="/payment-details"
            name="Notifications"
            render={(props) => (
              <MessagesLayout {...props} name="Payment Details" />
            )}
          />

          {/* Admin */}
          <Route
            exact
            path="/admin"
            name="Admin"
            render={(props) => <TheAdminLayout {...props} />}
          />
          <Route
            exact
            path="/admin/login"
            name="Admin Login"
            render={(props) => <AuthLayout {...props} />}
          />
          <Route
            exact
            path="/admin/forgot-password"
            name="Admin Forgot Password"
            render={(props) => <AuthLayout {...props} />}
          />
          <Route
            exact
            path="/admin/users"
            name="Admin Users"
            render={(props) => <TheAdminLayout {...props} />}
          />
          <Route
            exact
            path="/admin/pending-jobs"
            name="Admin Pending Jobs"
            render={(props) => <TheAdminLayout {...props} />}
          />
          <Route
            exact
            path="/admin/current-jobs"
            name="Admin Current Jobs"
            render={(props) => <TheAdminLayout {...props} />}
          />
          <Route
            exact
            path="/admin/past-jobs"
            name="Admin Past Jobs"
            render={(props) => <TheAdminLayout {...props} />}
          />
          <Route
            exact
            path="/admin/closed-jobs"
            name="Admin Closed Jobs"
            render={(props) => <TheAdminLayout {...props} />}
          />
          <Route
            exact
            path="/admin/study-resources"
            name="Admin Study Resources"
            render={(props) => <TheAdminLayout {...props} />}
          />
          <Route
            exact
            path="/admin/pages"
            name="Admin Pages"
            render={(props) => <TheAdminLayout {...props} />}
          />
          <Route
            exact
            path="/admin/subscriptions"
            name="Admin Subscriptions"
            render={(props) => <TheAdminLayout {...props} />}
          />
          <Route
            exact
            path="/admin/orders"
            name="Admin Orders"
            render={(props) => <TheAdminLayout {...props} />}
          />
          <Route
            exact
            path="/admin/dispute"
            name="Admin Dispute"
            render={(props) => <TheAdminLayout {...props} />}
          />
          <Route
            exact
            path="/admin/reviews"
            name="Admin Reviews"
            render={(props) => <TheAdminLayout {...props} />}
          />
          <Route
            exact
            path="/admin/reports"
            name="Admin Reports"
            render={(props) => <TheAdminLayout {...props} />}
          />
          <Route
            exact
            path="/admin/payouts"
            name="Admin Reports"
            render={(props) => <TheAdminLayout {...props} />}
          />
          <Route
            exact
            path="/admin/blogs"
            name="Admin Blogs"
            render={(props) => <TheAdminLayout {...props} />}
          />
          <Route
            exact
            path="/admin/coupons"
            name="Admin Coupons"
            render={(props) => <TheAdminLayout {...props} />}
          />
          <Route
            exact
            path="/admin/banned-words"
            name="Admin Banned Words"
            render={(props) => <TheAdminLayout {...props} />}
          />
          <Route
            exact
            path="/admin/setting/email"
            name="Admin Email"
            render={(props) => <TheAdminLayout {...props} />}
          />
          {/* <Route path="/:pathName" element={<PageNotFound />} /> */}
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
