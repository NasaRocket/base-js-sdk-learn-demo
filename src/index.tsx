import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Banner, Toast } from '@douyinfe/semi-ui';
import { bitable } from '@base-api-dev-version/api';
import { Type } from '@douyinfe/semi-ui/lib/es/banner';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoadApp/>
  </React.StrictMode>
)

function LoadApp() {
  const [info, setInfo] = useState('get table name, please waiting ....');
  const [infoType, setInfoType] = useState('info');
  useEffect(() => {
    const fn = async () => {
      const table = await bitable.base.getActiveTable();
      const tableName = await table.getName();
      setInfo(`The table Name is ${tableName}`);
      setInfoType('success');
    };
    fn();
  }, []);

  return <div>
    <Banner
      type={infoType as Type}
      closeIcon={null}
      description={info}
    />
  </div>
}