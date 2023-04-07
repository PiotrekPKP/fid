#! /usr/bin/env node
import S from"inquirer";import A from"gradient-string";import f from"path";import{fileURLToPath as T}from"url";var P=T(import.meta.url),_=f.dirname(P),d=f.join(_,"../"),g=`
\u2591\u2588\u2580\u2584\u2591\u2588\u2580\u2580\u2584\u2591\u2588\u2580\u2580\u2591\u2588\u2580\u2580\u2584\u2591\u2580\u2588\u2580\u2591\u2588\u2580\u2580\u2591\u2591\u2591\u2591\u2580\u2588\u2580\u2591\u2588\u2580\u2580\u2584\u2591\u2588\u2591\u2592\u2588\u2591\u2588\u2591\u2588\u2591\u2591\u2591\u2591\u2588\u2580\u2580\u2584\u2591\u2584\u2580\u2580\u2584\u2591\u2584\u2580\u2580\u2584
\u2591\u2588\u2591\u2591\u2591\u2588\u2584\u2584\u2580\u2591\u2588\u2580\u2580\u2591\u2588\u2584\u2584\u2588\u2591\u2591\u2588\u2591\u2591\u2588\u2580\u2580\u2591\u2580\u2580\u2591\u2591\u2588\u2591\u2591\u2588\u2584\u2584\u2588\u2591\u2588\u2591\u2592\u2588\u2591\u2584\u2580\u2584\u2591\u2580\u2580\u2591\u2588\u2584\u2584\u2588\u2591\u2588\u2584\u2584\u2588\u2591\u2588\u2584\u2584\u2588
\u2591\u2580\u2580\u2580\u2591\u2580\u2591\u2580\u2580\u2591\u2580\u2580\u2580\u2591\u2580\u2591\u2591\u2580\u2591\u2591\u2580\u2591\u2591\u2580\u2580\u2580\u2591\u2591\u2591\u2591\u2591\u2580\u2591\u2591\u2580\u2591\u2591\u2580\u2591\u2591\u2580\u2580\u2580\u2591\u2580\u2591\u2580\u2591\u2591\u2591\u2591\u2580\u2591\u2591\u2580\u2591\u2588\u2591\u2591\u2591\u2591\u2588\u2591\u2591\u2591
`;var u=()=>{let e=process.env.npm_config_user_agent;return e?e.startsWith("yarn")?"yarn":e.startsWith("pnpm")?"pnpm":"npm":"npm"},k=/^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/,y=e=>{let t=e.split("/"),r=t.findIndex(n=>n.startsWith("@")),a=t[t.length-1];return t.findIndex(n=>n.startsWith("@"))!==-1&&(a=t.slice(r).join("/")),e==="."||k.test(a??"")?!0:"App name must consist of only lowercase alphanumeric characters, '-', and '_'"},w=()=>{console.log(A(["#FF006B","#0085FF"]).multiline(g))};import D from"ora";import s from"path";import h from"inquirer";import o from"fs-extra";import i from"chalk";import{execa as O}from"execa";var v=async e=>{let t=D("Setting up your project...").start(),r=s.resolve(process.cwd(),e),a=s.join(d,"template");if(o.existsSync(r))if(o.readdirSync(r).length===0)e!=="."&&t.info(`${i.cyan.bold(e)} exists but is empty, continuing...
`);else{t.stopAndPersist();let{overwriteDir:c}=await h.prompt({name:"overwriteDir",type:"list",message:`${i.redBright.bold("Warning:")} ${i.cyan.bold(e)} already exists and isn't empty. How would you like to proceed?`,choices:[{name:"Abort installation (recommended)",value:"abort",short:"Abort"},{name:"Clear the directory and continue installation",value:"clear",short:"Clear"},{name:"Continue installation and overwrite conflicting files",value:"overwrite",short:"Overwrite"}],default:"abort"});c==="abort"&&(t.fail("Aborting installation..."),process.exit(1));let x=c==="clear"?"clear the directory":"overwrite conflicting files",{confirmOverwriteDir:b}=await h.prompt({name:"confirmOverwriteDir",type:"confirm",message:`Are you sure you want to ${x}?`,default:!1});b||(t.fail("Aborting installation..."),process.exit(1)),c==="clear"&&(t.info(`Emptying ${i.cyan.bold(e)} and creating t3 app..
`),o.emptyDirSync(r))}t.start(),o.copySync(a,r),t.text="Installing dependencies...";let n=u();await O(n,n==="yarn"?[]:["install"],{cwd:r});let l=e==="."?s.basename(process.cwd()):e,p=s.join(r,"package.json"),m=o.readJsonSync(p);m.name=l,o.writeJsonSync(p,m,{spaces:2}),t.succeed(`${i.cyan.bold(l)} ${i.green("scaffolded successfully!")}
`)};var $=async()=>{w();let{projectName:e}=await S.prompt({message:"How is your project called?",name:"projectName",transformer:t=>t.trim(),validate:y});console.log(),await v(e)};await $();
//# sourceMappingURL=index.js.map