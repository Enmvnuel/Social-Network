import LeftSidebar from "../components/layout/LeftSidebar";
import RightSideBar from "../components/layout/RightSideBar";
import Feed from "../components/dashboard/Feed";
function Dashboard() {
    return (
        <div className="bg-white min-h-screen text-gray-900">
            <div className="max-w-screen-xl mx-auto grid grid-cols-10">
                <LeftSidebar />

                <Feed />

                <RightSideBar />
            </div>
        </div>
    );
}

export default Dashboard;
