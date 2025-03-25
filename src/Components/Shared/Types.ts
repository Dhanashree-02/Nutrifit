export enum SelectedPage {
  Home = 'home',
  Doctors = 'doctors',
  Services = 'services',
  Reviews = 'reviews',
}

export enum SelectedService {
  MealPlanning = 'meal-planning',
  WeightManagement = 'weight-management',
  SportsNutrition = 'sports-nutrition',
  DietTherapy = 'diet-therapy',
  Wellness = 'wellness',
  FamilyNutrition = 'family-nutrition',
  CorporateWellness = 'corporate-wellness',
  NutritionEducation = 'nutrition-education',
  SeeMore = 'seemore',
}

export enum UserType {
  User = 'user',
  Admin = 'admin'
}

export interface LoginCredentials {
  email: string;
  password: string;
  userType: UserType;
}
