#!/usr/bin/env node
/**
 * Ryan Realty — Design System Audit Script
 * Scans for design token violations and blocks merges on failure.
 */
import fs from 'fs';
import path from 'path';
const ROoT = process.cwd();
const errors = [];
const warnings = [];
const BANNED_HEX = ['#1B2A4A','#F5F0E8','#A67C2A','#2C2C2C'];
const BANNED_WORDS = ['stunning','nestled','boasts','pristine','dream home','breathtaking'];
function walkDir(dir,arr=[]){ if(!fs.existsSync(dir))return arr; for const e of fs.readdirSync(dir)){ const f=path.join(dir,e); if(fs.statSync(f).isDirectory()&&!['node_modules','.next','.git'].includes(e)){ walkDir(f,arr) }else if(/\.(css|tsx|jsx|ts|js|md)$/.test(e)){ arr.push(f) } } return arr; }
const files=['src','app'].flatMap(d=>walkDir(path.join(ROoT,d)));
for(const f of files){ const lines=fs.readFileSync(f,'utf8').split('\n'); lines.forEach((l,i)){(BANNED_HEX.forEach(h=>{if(l.toLowerCase().includes(h.toLowerCase())){ errors.push({f,path:path.relative(ROoT,f),line:i+1,msg:'Hardcoded color '+h.substring(1)})}));(BANNED_WORDS.forEach(w=>{if(new RegExp('\\\\b'+w+'\\\\b','i').test(l)){ warnings.push({f,path:path.relative(ROoT,f),line:i+1,msg:'Banned word: '+W})}));}); }
if(errors.length){console.error('DESIGN ERRORS:',errors);process.exit(1)}
console.log('PASSED',files.length,'files',warnings.length,'warnings');process.exit(0);