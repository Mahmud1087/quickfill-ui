import menu from '~/menu-svg.svg';
import menuactive from '~/menu-active-svg.svg';
import transactions from '~/image 26 (traced).png';
import transactionsActive from '~/transaction-active-svg.svg';
import cards from '~/cards-svg.svg';
import cardsActive from '~/cards-active-svg.svg';
import fleets from '~/fleet-svg.svg';
import fleetsActive from '~/fleet-active-svg.svg';
import drivers from '~/drivers-svg.svg';
import driversActive from '~/drivers-active-svg.svg';
import vehicles from '~/vehicles-svg.svg';
import vehiclesActive from '~/vehicles-active-svg.svg';
import requestFunds from '~/reports-svg.svg';
import requestFundsActive from '~/reports-active-svg.svg';
import reports from '~/reports-svg.svg';
import reportsActive from '~/reports-active-svg.svg';
import settings from '~/settings-svg.svg';
import settingsActive from '~/settings-active-svg.svg';

import analytic from '~/analytics.png';

export const sidebarMenu = [
  { label: 'dashboard', path: '/', icon: menu, iconActive: menuactive },
  {
    label: 'transactions',
    path: '/transactions',
    icon: transactions,
    iconActive: transactionsActive,
  },
  { label: 'cards', path: '/cards', icon: cards, iconActive: cardsActive },
  { label: 'fleets', path: '/fleets', icon: fleets, iconActive: fleetsActive },
  {
    label: 'drivers',
    path: '/drivers',
    icon: drivers,
    iconActive: driversActive,
  },
  {
    label: 'vehicles',
    path: '/vehicles',
    icon: vehicles,
    iconActive: vehiclesActive,
  },
  {
    label: 'request funds',
    path: '/request-funds',
    icon: requestFunds,
    iconActive: requestFundsActive,
  },
  {
    label: 'reports',
    path: '/reports',
    icon: reports,
    iconActive: reportsActive,
  },
  {
    label: 'settings',
    path: '/settings',
    icon: settings,
    iconActive: settingsActive,
  },
];

export const analyticsCardData = [
  {
    label: 'Balance',
    value: '12,876,050',
    icon: analytic,
    isFirstChild: true,
  },
  {
    label: 'Cards',
    value: '1,253,100',
    icon: cardsActive,
    isFirstChild: false,
  },
  {
    label: 'Fleets',
    value: '5,235',
    icon: fleetsActive,
    isFirstChild: false,
  },
  {
    label: 'Drivers',
    value: '905,205',
    icon: driversActive,
    isFirstChild: false,
  },
];

export const topPurchases = [
  {
    name: 'Ibrahim M Kano',
    location: 'Petrol (PMS)',
    amount: '5,562,000',
  },
  {
    name: 'Jonathan Kent',
    location: 'Petrol (PMS)',
    amount: '12,062,000',
  },
  {
    name: 'Mathew Ademola',
    location: 'Petrol (PMS)',
    amount: '5,562,000',
  },
  {
    name: 'Funsho Adeyemo',
    location: 'Petrol (PMS)',
    amount: '5,562,000',
  },
];

export const recentTransactions = [
  {
    date: '10 June, 2024 5:30PM',
    type: 'Wallet Funding',
    company: 'Dangote',
    amount: '5,000,000',
    status: 'pending',
  },
  {
    date: '10 June, 2024 5:30PM',
    type: 'Wallet Funding',
    company: 'AA Rano',
    amount: '100,000,000',
    status: 'success',
  },
  {
    date: '10 June, 2024 5:30PM',
    type: 'Wallet Funding',
    company: 'Oando',
    amount: '2,500,000',
    status: 'success',
  },
  {
    date: '10 June, 2024 5:30PM',
    type: 'Wallet Funding',
    company: 'Total',
    amount: '42,000,000',
    status: 'success',
  },
  {
    date: '10 June, 2024 5:30PM',
    type: 'Wallet Funding',
    company: 'NNPC',
    amount: '2,500,000',
    status: 'success',
  },
];

export const activityData = [
  {
    title: 'New fleet created',
    subtitle: 'Action by you',
    timeDate: '2 hours ago',
  },
  {
    title: 'CRD-0112150 card funded',
    subtitle: 'Action by Sarah',
    timeDate: '9 June, 2024',
  },
  {
    title: '15 new drivers added',
    subtitle: 'Action by you',
    timeDate: '2 hours ago',
  },
  {
    title: '200 vehicles added',
    subtitle: 'Action by you',
    timeDate: '6 June, 2024',
  },
];
