/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logOutState } from "../features/auth/auth";
import { useGetUserQuery } from "../features/auth/auth-slice";

interface Users {
	sub: string;
	fullName: string;
	email: string;
	roles: string[];
}

function useAuthCheck() {
	const [userId, setUserId] = useState("");
	const { status, isLoading, isFetching, error } = useGetUserQuery(userId);
	const [isChecking, setIsChecking] = useState(false);
	const dispatch = useDispatch();

	// * Get User Data
	const getUserData = async () => {
		const data: any = localStorage.getItem("rekoul_user");
		const user: Users = JSON.parse(data);
		setUserId(user?.sub);
	};

	useEffect(() => {
		getUserData();
	}, []);

	useEffect(() => {
		if (!isLoading && !isFetching && status === "fulfilled") {
			setIsChecking(true);
		} else if (status === "rejected" && !isFetching && !isLoading) {
			setIsChecking(true);
			dispatch(logOutState());
			localStorage.removeItem("rekoul_token");
		}
	}, [status, isLoading, isFetching, error]);

	return isChecking;
}

export default useAuthCheck;
