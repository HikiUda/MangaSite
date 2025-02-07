import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.scss';

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);

root.render(
    <div>
        <App className={'222'} />
    </div>,
);
