import {createNavigationContainerRef} from '@react-navigation/native';

export let navigationRef = createNavigationContainerRef();

export const setNaigationRef = ref => {
  navigationRef = ref;
};

export function navigate(name: string, params?: {string: any}) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
