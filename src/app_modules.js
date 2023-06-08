/** Template */
import AppTemplate from './app_template';

/** Template sub modules */
import SProblem from "./1_S/problem";
import SSolution from "./1_S/solution";
import OProblem from './2_O/problem';
import OSolution from './2_O/solution';
import LProblem from './3_L/problem';
import LSolution from './3_L/solution';

export const path_modules = {
    app: {
        label: 'App',
        path: ``,
        fullPath: `/`,
        children: {
            sproblem: { 
                label: 'Problem S',
                path: '',
                fullPath: `/`,
            },
            ssolution: { 
                label: 'Solution S',
                path: 'solution-s',
                fullPath: `/solution-s`,
            },
            oproblem: { 
                label: 'Problem O',
                path: 'problem-o',
                fullPath: `/problem-o`,
            },
            osolution: { 
                label: 'Solution O',
                path: 'solution-o',
                fullPath: `/solution-o`,
            },
            lproblem: { 
                label: 'Problem L',
                path: 'problem-l',
                fullPath: `/problem-l`,
            },
            lsolution: { 
                label: 'Solution L',
                path: 'solution-l',
                fullPath: `/solution-l`,
            },
        }
    },
};

export const router_modules = [
    {
        path: `${path_modules.app.path}`,
        component: AppTemplate,
        children: [
            {                
                path: `${path_modules.app.children.sproblem.path}`,
                component: SProblem,
            },
            {                
                path: `${path_modules.app.children.ssolution.path}`,
                component: SSolution,
            },
            {                
                path: `${path_modules.app.children.oproblem.path}`,
                component: OProblem,
            },
            {                
                path: `${path_modules.app.children.osolution.path}`,
                component: OSolution,
            },
            {                
                path: `${path_modules.app.children.lproblem.path}`,
                component: LProblem,
            },
            {                
                path: `${path_modules.app.children.lsolution.path}`,
                component: LSolution,
            },
        ],
    },
];