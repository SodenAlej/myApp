import { IonContent, IonHeader, IonIcon, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import prototipo from './assets/img/prototipo.jpg'
import './Tab1.css';
import { leafOutline } from 'ionicons/icons';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonIcon slot="start" icon={leafOutline}></IonIcon>

             <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>

            <IonTitle size="large">Tab 1</IonTitle>
            
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonCard>
      <img src={prototipo} />
      <IonCardHeader>
        <IonCardTitle>Invernadero automatizado</IonCardTitle>
        <IonCardSubtitle>Cuidado de las plantas</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Este proyecto esta enfocado a realizar un espacio donde se pueda ver el estado de la planta asi 
        como tomar acciones de cuidado sobre el mismo por medio de una app
      </IonCardContent>
    </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
