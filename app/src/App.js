import './styles/global.scss';
import './styles/style.scss';
import './styles/header.scss';
import './styles/home-slider.scss';
import './styles/news-slider.scss';
import './styles/footer.scss';

import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CenterObslug from "./pages/Company/CenterObslug";
import CenterObslugCli from "./pages/Clients/CenterObslugCli";
import SendPokazCli from "./pages/Clients/SendPokazCli";
import NoPage from "./pages/NoPage";
import Tarifs from './pages/Company/Tarifs';
import News from './pages/News';
import NewsPage from './pages/NewsPage';
import Vacancies from './pages/Clients/Vacancies';
import Layout from './pages/Layout';
import PaymentCli from './pages/Clients/PaymentCli';
import CommercialOffers from './pages/Company/CommercialOffers';
import CalculatorCli from './pages/Clients/CalculatorCli';
import TarifCli from './pages/Clients/TarifCli';
import ApiContentPage from './pages/ApiContentPage';
import ServiceOnlineCli from './pages/ServiceOnline/ServiceOnlineCli';
import ServiceOnlineCompany from './pages/ServiceOnline/ServiceOnlineCompany';
import ServiceOnlineCliZminaVl from './pages/ServiceOnline/Clients/ServiceOnlineCliZminaVl';
import Pay from './pages/Pay';
import Assignment from './pages/Collabor/Assignment';
import Application from './pages/Collabor/Application';
import Info from './pages/Collabor/Info';
import CreateContract from './pages/Collabor/CreateContract';

import ElectroService from './pages/new-content/ElectroService';
import Support from './pages/new-content/Support';
import ConditionElectric from './pages/new-content/ConditionElectric';
import Lawmaking from './pages/new-content/Lawmaking';
import ClientInfo from './pages/new-content/ClientInfo';
import SubmissionProcedure from './pages/new-content/SubmissionProcedure';
import Example from './pages/new-content/Example';
// import Score from './pages/new-content/Score';
import Comunication from './pages/new-content/Comunication';
import Gas from './pages/new-content/Gas';

const errorMsg = '404 Відсуня сторінка';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NoPage error={errorMsg} />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/news",
        element: <News />,
        errorElement: <NoPage />,
      },
      {
        path: "/news/:id",
        element: <NewsPage />,
        errorElement: <NoPage />,
      },
      {
        path: "/company/center-obslug",
        element: <CenterObslug />,
        errorElement: <NoPage />,
      },
      {
        path: "/company/tarif",
        element: <Tarifs />,
        errorElement: <NoPage />,
      },
      {
        path: "/company/contract",
        element: <CreateContract type={'Для компаній'} consumer={2} />,
        errorElement: <NoPage />,
      },
      {
        path: "/company/commercial",
        element: <CommercialOffers />,
        errorElement: <NoPage />,
      },
      {
        path: "/company/assignment",
        element: <Assignment type={'Для компаній'} />,
        errorElement: <NoPage />,
      },
      {
        path: "/company/application",
        element: <Application type={'Для компаній'} />,
        errorElement: <NoPage />,
      },
      {
        path: "/company/info",
        element: <Info type={'Для компаній'} />,
        errorElement: <NoPage />,
      },
      {
        path: "/clients/center-obslug",
        element: <CenterObslugCli />,
        errorElement: <NoPage />,
      },
      {
        path: "/clients/send-pokaz",
        element: <SendPokazCli />,
        errorElement: <NoPage />,
      },
      {
        path: "/clients/info",
        element: <Info type={'Для населення'} />,
        errorElement: <NoPage />,
      },
      {
        path: "/clients/vacancies",
        element: <Vacancies />,
        errorElement: <NoPage />,
      },
      {
        path: "/clients/assignment",
        element: <Assignment type={'Для населення'} />,
        errorElement: <NoPage />,
      },
      {
        path: "/clients/application",
        element: <Application type={'Для населення'} />,
        errorElement: <NoPage />,
      },
      {
        path: "/clients/payment",
        element: <PaymentCli />,
        errorElement: <NoPage />,
      },
      {
        path: "/clients/contract",
        element: <CreateContract type={'Для населення'} consumer={1} />,
        errorElement: <NoPage />,
      },
      {
        path: "/clients/calculator_pobut",
        element: <CalculatorCli />,
        errorElement: <NoPage />,
      },
      {
        path: "/clients/tarif",
        element: <TarifCli />,
        errorElement: <NoPage />,
      },
      {
        path: "/page/:id",
        element: <ApiContentPage />,
        errorElement: <NoPage />,
      },
      {
        path: "/pay",
        element: <Pay />,
        errorElement: <NoPage />,
      },
      {
        path: "/clients/service_online",
        element: <ServiceOnlineCli />,
        errorElement: <NoPage />,
      },
      {
        path: "/company/service_online",
        element: <ServiceOnlineCompany />,
        errorElement: <NoPage />,
      },
      {
        path: "/clients/service_online/zmina_vlasnyka_rakhunku",
        element: <ServiceOnlineCliZminaVl />,
        errorElement: <NoPage />,
      },



      {
        path: "/electro-service",
        element: <ElectroService />,
        errorElement: <NoPage />,
      },
      {
        path: "/support",
        element: <Support />,
        errorElement: <NoPage />,
      },
      {
        path: "/condition-electric",
        element: <ConditionElectric />,
        errorElement: <NoPage />,
      },
      {
        path: "/lawmaking",
        element: <Lawmaking />,
        errorElement: <NoPage />,
      },
      {
        path: "/client-info",
        element: <ClientInfo />,
        errorElement: <NoPage />,
      },
      {
        path: "/submission-procedure",
        element: <SubmissionProcedure />,
        errorElement: <NoPage />,
      },
      {
        path: "/example",
        element: <Example />,
        errorElement: <NoPage />,
      },
      {
        path: "/comunication",
        element: <Comunication />,
        errorElement: <NoPage />,
      },
      {
        path: "/gas",
        element: <Gas />,
        errorElement: <NoPage />,
      },
    ],
  },
]);

function App() {

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
