export interface action {
  type: string;
  payload: any;
}

export interface rootState {
  physical: Skill | null;
  socialAndEmotional: Skill | null;
}

export interface Skill {
  age_range?: string;
  area_id?: number;
  children?: boolean;
  description?: string;
  id?: number;
  logo_mobile?: string;
  logo_web?: string;
  milestones?: Array<milestone>;
  parent_skill_id?: null;
  percentil_availability?: boolean;
  title?: string;
}

export interface milestone {
  id: number;
  age: number;
  skill_id: number;
  master: boolean;
  area_id: number;
  title: string;
  description: string;
  science_fact: string;
  source_data: string;
  parent_skill_id: null;
  media_jpg: string;
  media_mp4: string;
  answer: null;
}

export interface CurrentState {
  id: number;
  currentState: string;
}

export interface MilestoneCardProps {
  ageRange?: string;
  id: number;
  age: number;
  skill_id: number;
  master: boolean;
  area_id: number;
  title: string;
  description: string;
  science_fact: string;
  source_data: string;
  parent_skill_id: null;
  media_jpg: string;
  media_mp4: string;
  answer: null;
}

export interface SelectedAreaStyle {
  containerAreas: string;
  buttonContainerPhysical: string;
  buttonContainerSocialAndEmotional: string;
  buttonPhysical: string;
  buttonSocialAndEmotional: string;
}
