import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";
import { LoadingContainer } from "../components/containers";
import { AppRoutes } from "../constants/pages";

const HowItWorksPage = LoadingContainer(
  lazy(() => import("../pages/HowItWorksPage"))
);

export const router = createBrowserRouter([
  {
    path: AppRoutes.HOME,
    element: <Navigate to={AppRoutes.HOW_IT_WORKS} replace />,
  },
  {
    path: AppRoutes.HOW_IT_WORKS,
    element: <HowItWorksPage />,
  },
  {
    path: AppRoutes.NOT_FOUND,
    element: <Navigate to={AppRoutes.HOW_IT_WORKS} replace />,
  },
]);