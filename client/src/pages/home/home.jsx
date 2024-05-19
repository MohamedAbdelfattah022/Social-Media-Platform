import Posts from "@/components/posts";
import Share from "@/components/share";
import Stories from "@/components/stories";
import React from "react";

export const Home = () => {
	return (
		<>
			<div className="py-7 pl-3 pr-5">
				<Stories />
				<Share />
				<Posts />
			</div>
		</>
	);
};
