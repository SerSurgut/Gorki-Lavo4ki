import React, { useEffect } from 'react';
import { fetchGetCordsAC } from '../../redux/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import {
  Map,
  Placemark,
  Clusterer,
  GeolocationControl,
} from 'react-yandex-maps';

function AccountMap() {
  const coordForStaticPlacemark = useSelector((store) => store.coords);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetCordsAC());
  }, []);

  return (
    <>
      <Map
        width={'500px'}
        height={'500px'}
        defaultState={{
          center: [59.94160293948906, 30.305847697399653],
          zoom: 13,
          controls: ['zoomControl', 'fullscreenControl'],
        }}
      >
        {coordForStaticPlacemark &&
          coordForStaticPlacemark.map((el, index) => (
            <Placemark
              key={index}
              geometry={el.coord[0]}
              properties={{
                iconContent: 'Грязюка',
                balloonContentHeader:
                  '<span class="description">Ваша отметка</span>',
                balloonContentBody: `Туть грязно`,
              }}
              options={{
                // preset: "islands#redStretchyIcon",
                iconLayout: 'default#image',
                iconImageHref:
                  //ссылка сломалась, подставили пока ссылку на пнг картинку с марком
                  // "https://psv4.userapi.com/c856220/u8423482/docs/d4/a62869fdf7ee/placemark-06.png?extra=vfLVfiI9KJh8kPP143yaJMZHXyG1-PszB1QCpBhesI3Yo0CcPhYjkihP7JU7lZATowUotK2FMNFhmXsG-_vjU-mo3LtlPD6zBmatW_cmGr4PEIswQDlVTvla69SHqKK2BjWlVuKBSx4ojVHrrw"
                  'https://www.flaticon.com/svg/static/icons/svg/876/876213.svg',
                iconImageSize: [45, 60],
                iconImageOffset: [-20, -20],
              }}
            />
          ))}
      </Map>
    </>
  );
}

export default AccountMap;
