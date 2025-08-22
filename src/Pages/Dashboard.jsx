import LeftSidebar from "./Dashboard/LeftSidebar";
import RightSideBar from "./Dashboard/RightSideBar";
import Feed from "./Dashboard/Feed";
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
