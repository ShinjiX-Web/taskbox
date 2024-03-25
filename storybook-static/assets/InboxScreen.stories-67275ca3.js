import{j as e}from"./Task.stories-cab72d6e.js";import{r as x}from"./index-76fb7be0.js";import{u as f,a as w,f as g,T as j,P as k,s as v,M as y}from"./TaskList.stories-eaabfd9d.js";import{r as b}from"./index-03d05a58.js";import{w as T,b as E,c as S,d as o}from"./index-444a5176.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";function h(){const t=f(),{error:s}=w(a=>a.taskbox);return x.useEffect(()=>{t(g())},[]),s?e.jsx("div",{className:"page lists-show",children:e.jsxs("div",{className:"wrapper-message",children:[e.jsx("span",{className:"icon-face-sad"}),e.jsx("p",{className:"title-message",children:"Oh no!"}),e.jsx("p",{className:"subtitle-message",children:"Something went wrong"})]})}):e.jsxs("div",{className:"page lists-show",children:[e.jsx("nav",{children:e.jsx("h1",{className:"title-page",children:"Taskbox"})}),e.jsx(j,{})]})}h.__docgenInfo={description:"",methods:[],displayName:"InboxScreen"};var u=b();const D={component:h,title:"InboxScreen",decorators:[t=>e.jsx(k,{store:v,children:t()})],tags:["autodocs"]},r={parameters:{msw:{handlers:[u.rest.get("https://jsonplaceholder.typicode.com/todos?userId=1",(t,s,a)=>s(a.json(y.tasks)))]}},play:async({canvasElement:t})=>{const s=T(t);await E(await s.findByTestId("loading")),await S(async()=>{await o.click(s.getByLabelText("pinTask-1")),await o.click(s.getByLabelText("pinTask-3"))})}},n={parameters:{msw:{handlers:[u.rest.get("https://jsonplaceholder.typicode.com/todos?userId=1",(t,s,a)=>s(a.status(403)))]}}};var i,c,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [rest.get('https://jsonplaceholder.typicode.com/todos?userId=1', (req, res, ctx) => {
        return res(ctx.json(MockedState.tasks));
      })]
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Waits for the component to transition from the loading state
    await waitForElementToBeRemoved(await canvas.findByTestId('loading'));
    // Waits for the component to be updated based on the store
    await waitFor(async () => {
      // Simulates pinning the first task
      await fireEvent.click(canvas.getByLabelText('pinTask-1'));
      // Simulates pinning the third task
      await fireEvent.click(canvas.getByLabelText('pinTask-3'));
    });
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,p,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [rest.get('https://jsonplaceholder.typicode.com/todos?userId=1', (req, res, ctx) => {
        return res(ctx.status(403));
      })]
    }
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const M=["Default","Error"];export{r as Default,n as Error,M as __namedExportsOrder,D as default};
