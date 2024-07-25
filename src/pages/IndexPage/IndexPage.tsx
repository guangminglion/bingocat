import { Section, Cell, Image, List,Tabbar } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';
import { useState } from 'react';
import { GiDiceSixFacesFive,GiStarStruck} from 'react-icons/gi'
import { Link } from '@/components/Link/Link.tsx';

import tonSvg from './ton.svg';
import { useTranslation } from 'react-i18next';

const tabs = [
  {
    id:1,
    text:"Home",
    Icon:<GiDiceSixFacesFive/>
  },
  {
    id:2,
    text:"My",
    Icon:<GiStarStruck/>
  }
]
export const IndexPage: FC = () => {
  const { t, i18n } = useTranslation();
  const [currentTab, setCurrentTab] = useState(tabs[0].id);
  var tabPanle =  <List>
  <Section
    header='Features'
    footer='You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects'
  >
    <Link to='/ton-connect'>
      <Cell
        before={<Image src={tonSvg} style={{ backgroundColor: '#007AFF' }}/>}
        subtitle='Connect your TON wallet'
      >
        {t('Ton Connect')}
      </Cell>
    </Link>
  </Section>
  <Section
    header='Application Launch Data'
    footer='These pages help developer to learn more about current launch information'
  >
    <Link to='/init-data'>
      <Cell subtitle='User data, chat information, technical data'>Init Data</Cell>
    </Link>
    <Link to='/launch-params'>
      <Cell subtitle='Platform identifier, Mini Apps version, etc.'>Launch Parameters</Cell>
    </Link>
    <Link to='/theme-params'>
      <Cell subtitle='Telegram application palette information'>Theme Parameters</Cell>
    </Link>
  </Section>
</List>;
  if(currentTab == 2){
    tabPanle = <div>第二个页面</div>;
  }
  return (
    <div>
      {tabPanle}
    <Tabbar>
        {tabs.map(({
        id,
        text,
        Icon
      }) => <Tabbar.Item key={id} text={t(text)} selected={id === currentTab} onClick={() => setCurrentTab(id)}>
         {Icon}
          </Tabbar.Item>)}
      </Tabbar>
    </div>
  );
};
