import { VocabularyItem } from '@/types';
import { GREETINGS_SELF_VOCAB } from './greetings_self';
import { PEOPLE_FAMILY_VOCAB } from './people_family';
import { NUMBERS_TIME_VOCAB } from './numbers_time';
import { PLACES_DIRECTIONS_VOCAB } from './places_directions';
import { SCHOOL_WORK_VOCAB } from './school_work';
import { FOOD_SHOPPING_VOCAB } from './food_shopping';
import { TRANSPORT_TRAVEL_VOCAB } from './transport_travel';
import { DAILY_VERBS_VOCAB } from './daily_verbs';
import { ADJECTIVES_VOCAB } from './adjectives';
import { NATURE_WEATHER_VOCAB } from './nature_weather';
import { FUNCTIONAL_ADVERBS_VOCAB } from './functional_adverbs';

export const VOCABULARY_LIST: VocabularyItem[] = [
  ...GREETINGS_SELF_VOCAB,
  ...PEOPLE_FAMILY_VOCAB,
  ...NUMBERS_TIME_VOCAB,
  ...PLACES_DIRECTIONS_VOCAB,
  ...SCHOOL_WORK_VOCAB,
  ...FOOD_SHOPPING_VOCAB,
  ...TRANSPORT_TRAVEL_VOCAB,
  ...DAILY_VERBS_VOCAB,
  ...ADJECTIVES_VOCAB,
  ...NATURE_WEATHER_VOCAB,
  ...FUNCTIONAL_ADVERBS_VOCAB,
];

export default VOCABULARY_LIST;

