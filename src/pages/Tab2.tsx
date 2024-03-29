import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import './Tab2.css';
import { leafOutline } from 'ionicons/icons';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonIcon slot="start" icon={leafOutline}></IonIcon>

          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
        <IonCard>
      <IonCardHeader>
        <IonCardTitle>Informacion</IonCardTitle>
        <IonCardSubtitle>Promedio de humedad, cantidad de agua y temperatura para las plantas.</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent></IonCardContent>
    </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
