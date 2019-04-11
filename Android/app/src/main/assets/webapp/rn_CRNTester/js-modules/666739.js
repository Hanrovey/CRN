__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),l=r(d[2]),o=r(d[3]),s=r(d[4]),c=r(d[5]),u=r(d[6]),h=r(d[7]),f=h.Text,y=h.TextInput,E=h.View,x=h.LayoutAnimation,p=h.Button,b=r(d[8]),T=(function(c){function h(){var n,s;t(this,h);for(var c=arguments.length,u=new Array(c),f=0;f<c;f++)u[f]=arguments[f];return(s=l(this,(n=o(h)).call.apply(n,[this].concat(u)))).state={isRTL:!1},s}return s(h,c),n(h,[{key:"render",value:function(){var t=this,n=this.state.isRTL;return u.createElement(E,{style:{direction:n?'rtl':'ltr'}},u.createElement(f,null,"auto (default) - english LTR"),u.createElement(f,null,"\u0623\u062d\u0628 \u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 auto (default) - arabic RTL"),u.createElement(f,{style:{textAlign:'left'}},"left left left left left left left left left left left left left left left"),u.createElement(f,{style:{textAlign:'center'}},"center center center center center center center center center center center"),u.createElement(f,{style:{textAlign:'right'}},"right right right right right right right right right right right right right"),u.createElement(f,{style:{textAlign:'justify'}},"justify: this text component","'","s contents are laid out with \"textAlign: justify\" and as you can see all of the lines except the last one span the available width of the parent container."),u.createElement(p,{onPress:function(){return t.setState({isRTL:!n})},title:"Switch to "+(n?'LTR':'RTL')}))}}]),h})(u.Component),S=(function(c){function h(){return t(this,h),l(this,o(h).apply(this,arguments))}return s(h,c),n(h,[{key:"render",value:function(){return u.createElement(f,{style:{fontWeight:'500',color:'#527fe4'}},this.props.children)}}]),h})(u.Component),w=(function(c){function h(){var n,s;t(this,h);for(var c=arguments.length,u=new Array(c),f=0;f<c;f++)u[f]=arguments[f];return(s=l(this,(n=o(h)).call.apply(n,[this].concat(u)))).state={fontWeight:'bold',fontSize:15},s.toggleWeight=function(){s.setState({fontWeight:'bold'===s.state.fontWeight?'normal':'bold'})},s.increaseSize=function(){s.setState({fontSize:s.state.fontSize+1})},s}return s(h,c),n(h,[{key:"render",value:function(){var t={fontWeight:this.state.fontWeight,fontSize:this.state.fontSize};return u.createElement(E,null,u.createElement(f,{style:t},"Tap the controls below to change attributes."),u.createElement(f,null,u.createElement(f,null,"See how it will even work on",' ',u.createElement(f,{style:t},"this nested text"))),u.createElement(f,{style:{backgroundColor:'#ffaaaa',marginTop:5},onPress:this.toggleWeight},"Toggle Weight"),u.createElement(f,{style:{backgroundColor:'#aaaaff',marginTop:5},onPress:this.increaseSize},"Increase Size"))}}]),h})(u.Component),z=(function(c){function h(){var n,s;t(this,h);for(var c=arguments.length,u=new Array(c),f=0;f<c;f++)u[f]=arguments[f];return(s=l(this,(n=o(h)).call.apply(n,[this].concat(u)))).state={dynamicText:'',shouldRender:!0},s.reset=function(){x.easeInEaseOut(),s.setState({shouldRender:!1}),setTimeout(function(){x.easeInEaseOut(),s.setState({dynamicText:'',shouldRender:!0})},300)},s.addText=function(){s.setState({dynamicText:s.state.dynamicText+(Math.floor(10*Math.random()%2)?' foo':' bar')})},s.removeText=function(){s.setState({dynamicText:s.state.dynamicText.slice(0,s.state.dynamicText.length-4)})},s}return s(h,c),n(h,[{key:"render",value:function(){return this.state.shouldRender?u.createElement(E,null,u.createElement(f,{ellipsizeMode:"tail",numberOfLines:1,style:{fontSize:36,marginVertical:6}},"Truncated text is baaaaad."),u.createElement(f,{numberOfLines:1,adjustsFontSizeToFit:!0,style:{fontSize:40,marginVertical:6}},"Shrinking to fit available space is much better!"),u.createElement(f,{adjustsFontSizeToFit:!0,numberOfLines:1,style:{fontSize:30,marginVertical:6}},"Add text to me to watch me shrink! "+this.state.dynamicText),u.createElement(f,{adjustsFontSizeToFit:!0,numberOfLines:4,style:{fontSize:20,marginVertical:6}},"Multiline text component shrinking is supported, watch as this reeeeaaaally loooooong teeeeeeext grooooows and then shriiiinks as you add text to me! ioahsdia soady auydoa aoisyd aosdy  "+this.state.dynamicText),u.createElement(f,{adjustsFontSizeToFit:!0,numberOfLines:1,style:{marginVertical:6}},u.createElement(f,{style:{fontSize:14}},'Differently sized nested elements will shrink together. '),u.createElement(f,{style:{fontSize:20}},'LARGE TEXT! '+this.state.dynamicText)),u.createElement(E,{style:{flexDirection:'row',justifyContent:'space-around',marginTop:5,marginVertical:6}},u.createElement(f,{style:{backgroundColor:'#ffaaaa'},onPress:this.reset},"Reset"),u.createElement(f,{style:{backgroundColor:'#aaaaff'},onPress:this.removeText},"Remove Text"),u.createElement(f,{style:{backgroundColor:'#aaffaa'},onPress:this.addText},"Add Text"))):u.createElement(E,null)}}]),h})(u.Component),k=(function(c){function h(){return t(this,h),l(this,o(h).apply(this,arguments))}return s(h,c),n(h,[{key:"render",value:function(){for(var t=[],n=9;n>=0;n--)t.push(u.createElement(f,{key:n,style:{fontSize:8+5*n,backgroundColor:'#eee'}},n));var l=u.createElement(E,{style:{width:20,height:20,backgroundColor:'gray'}}),o={fontSize:16,marginTop:8,fontWeight:'bold'};return u.createElement(E,null,u.createElement(f,{style:o},'Nested <Text/>s:'),u.createElement(E,{style:{flexDirection:'row',alignItems:'baseline'}},l,u.createElement(f,null,t),l),u.createElement(f,{style:o},'Array of <Text/>s in <View>:'),u.createElement(E,{style:{flexDirection:'row',alignItems:'baseline'}},l,t,l),u.createElement(f,{style:o},'<TextInput/>:'),u.createElement(E,{style:{flexDirection:'row',alignItems:'baseline'}},l,u.createElement(y,{style:{margin:0,padding:0}},t),l),u.createElement(f,{style:o},'<TextInput multiline/>:'),u.createElement(E,{style:{flexDirection:'row',alignItems:'baseline'}},l,u.createElement(y,{multiline:!0,style:{margin:0,padding:0}},t),l))}}]),h})(u.Component),v=(function(c){function h(){var n,s;t(this,h);for(var c=arguments.length,u=new Array(c),f=0;f<c;f++)u[f]=arguments[f];return(s=l(this,(n=o(h)).call.apply(n,[this].concat(u)))).state={textMetrics:{x:0,y:0,width:0,height:0,capHeight:0,descender:0,ascender:0,xHeight:0},numberOfTextBlocks:1,fontSize:14},s}return s(h,c),n(h,[{key:"render",value:function(){var t=this,n=this.state.textMetrics.y+this.state.textMetrics.height-(this.state.textMetrics.descender+this.state.textMetrics.capHeight);return u.createElement(E,null,u.createElement(E,null,u.createElement(E,{style:{position:'absolute',left:this.state.textMetrics.x+this.state.textMetrics.width,top:n,width:5,height:Math.ceil(this.state.textMetrics.capHeight-this.state.textMetrics.xHeight),backgroundColor:'red'}}),u.createElement(E,{style:{position:'absolute',left:this.state.textMetrics.x+this.state.textMetrics.width,top:n+(this.state.textMetrics.capHeight-this.state.textMetrics.xHeight),width:5,height:Math.ceil(this.state.textMetrics.xHeight),backgroundColor:'green'}}),u.createElement(f,{style:{fontSize:this.state.fontSize},onTextLayout:function(n){var l=n.nativeEvent.lines;l.length>0&&t.setState({textMetrics:l[l.length-1]})}},new Array(this.state.numberOfTextBlocks).fill('A tiny block of text.').join(' '))),u.createElement(f,{onPress:function(){return t.setState({numberOfTextBlocks:t.state.numberOfTextBlocks+1})}},"More text"),u.createElement(f,{onPress:function(){return t.setState({fontSize:t.state.fontSize+1})}},"Increase size"),u.createElement(f,{onPress:function(){return t.setState({fontSize:t.state.fontSize-1})}},"Decrease size"))}}]),h})(u.Component),C=(function(c){function h(){var n,s;t(this,h);for(var c=arguments.length,u=new Array(c),f=0;f<c;f++)u[f]=arguments[f];return(s=l(this,(n=o(h)).call.apply(n,[this].concat(u)))).state={textMetrics:{x:0,y:0,width:0,height:0,capHeight:0,descender:0,ascender:0,xHeight:0}},s}return s(h,c),n(h,[{key:"render",value:function(){var t=this;return u.createElement(f,{onTextLayout:function(n){var l=n.nativeEvent.lines;l.length>0&&t.setState({textMetrics:l[0]})},style:[{marginTop:Math.ceil(-(this.state.textMetrics.ascender-this.state.textMetrics.capHeight)),marginBottom:Math.ceil(-this.state.textMetrics.descender)},this.props.style]},this.props.children)}}]),h})(u.Component);e.title='<Text>',e.description='Base component for rendering styled text.',e.displayName='TextExample',e.examples=[{title:'Wrap',render:function(){return u.createElement(f,null,"The text should wrap if it goes on multiple lines. See, this is going to the next line.")}},{title:"Substring Emoji (should only see 'test')",render:function(){return u.createElement(f,null,'test\ud83d\ude43'.substring(0,5))}},{title:'Text metrics',render:function(){return u.createElement(v,null)}},{title:'Text metrics legend',render:function(){return u.createElement(b,null)}},{title:'Baseline capheight box',render:function(){return u.createElement(E,{style:{backgroundColor:'red'}},u.createElement(C,null,"Some example text."))}},{title:'Padding',render:function(){return u.createElement(f,{style:{padding:10}},"This text is indented by 10px padding on all sides.")}},{title:'Font Family',render:function(){return u.createElement(E,null,u.createElement(f,{style:{fontFamily:c.isTV?'Times':'Cochin'}},"Cochin"),u.createElement(f,{style:{fontFamily:c.isTV?'Times':'Cochin',fontWeight:'bold'}},"Cochin bold"),u.createElement(f,{style:{fontFamily:'Helvetica'}},"Helvetica"),u.createElement(f,{style:{fontFamily:'Helvetica',fontWeight:'bold'}},"Helvetica bold"),u.createElement(f,{style:{fontFamily:c.isTV?'Courier':'Verdana'}},"Verdana"),u.createElement(f,{style:{fontFamily:c.isTV?'Courier':'Verdana',fontWeight:'bold'}},"Verdana bold"))}},{title:'Font Size',render:function(){return u.createElement(E,null,u.createElement(f,{style:{fontSize:23}},"Size 23"),u.createElement(f,{style:{fontSize:8}},"Size 8"))}},{title:'Color',render:function(){return u.createElement(E,null,u.createElement(f,{style:{color:'red'}},"Red color"),u.createElement(f,{style:{color:'blue'}},"Blue color"))}},{title:'Font Weight',render:function(){return u.createElement(E,null,u.createElement(f,{style:{fontSize:20,fontWeight:'100'}},"Move fast and be ultralight"),u.createElement(f,{style:{fontSize:20,fontWeight:'200'}},"Move fast and be light"),u.createElement(f,{style:{fontSize:20,fontWeight:'normal'}},"Move fast and be normal"),u.createElement(f,{style:{fontSize:20,fontWeight:'bold'}},"Move fast and be bold"),u.createElement(f,{style:{fontSize:20,fontWeight:'900'}},"Move fast and be ultrabold"))}},{title:'Font Style',render:function(){return u.createElement(E,null,u.createElement(f,{style:{fontStyle:'normal'}},"Normal text"),u.createElement(f,{style:{fontStyle:'italic'}},"Italic text"))}},{title:'Selectable',render:function(){return u.createElement(E,null,u.createElement(f,{selectable:!0},"This text is ",u.createElement(f,{style:{fontWeight:'bold'}},"selectable")," if you click-and-hold."))}},{title:'Text Decoration',render:function(){return u.createElement(E,null,u.createElement(f,{style:{textDecorationLine:'underline',textDecorationStyle:'solid'}},"Solid underline"),u.createElement(f,{style:{textDecorationLine:'underline',textDecorationStyle:'double',textDecorationColor:'#ff0000'}},"Double underline with custom color"),u.createElement(f,{style:{textDecorationLine:'underline',textDecorationStyle:'dashed',textDecorationColor:'#9CDC40'}},"Dashed underline with custom color"),u.createElement(f,{style:{textDecorationLine:'underline',textDecorationStyle:'dotted',textDecorationColor:'blue'}},"Dotted underline with custom color"),u.createElement(f,{style:{textDecorationLine:'none'}},"None textDecoration"),u.createElement(f,{style:{textDecorationLine:'line-through',textDecorationStyle:'solid'}},"Solid line-through"),u.createElement(f,{style:{textDecorationLine:'line-through',textDecorationStyle:'double',textDecorationColor:'#ff0000'}},"Double line-through with custom color"),u.createElement(f,{style:{textDecorationLine:'line-through',textDecorationStyle:'dashed',textDecorationColor:'#9CDC40'}},"Dashed line-through with custom color"),u.createElement(f,{style:{textDecorationLine:'line-through',textDecorationStyle:'dotted',textDecorationColor:'blue'}},"Dotted line-through with custom color"),u.createElement(f,{style:{textDecorationLine:'underline line-through'}},"Both underline and line-through"))}},{title:'Nested',description:"Nested text components will inherit the styles of their parents (only backgroundColor is inherited from non-Text parents).  <Text> only supports other <Text> and raw text (strings) as children.",render:function(){return u.createElement(E,null,u.createElement(f,null,"(Normal text,",u.createElement(f,{style:{fontWeight:'bold'}},"(and bold",u.createElement(f,{style:{fontSize:11,color:'#527fe4'}},"(and tiny inherited bold blue)"),")"),")"),u.createElement(f,{style:{opacity:.7}},"(opacity",u.createElement(f,null,"(is inherited",u.createElement(f,{style:{opacity:.7}},"(and accumulated",u.createElement(f,{style:{backgroundColor:'#ffaaaa'}},"(and also applies to the background)"),")"),")"),")"),u.createElement(f,{style:{fontSize:12}},u.createElement(S,null,"Entity Name")))}},{title:'Text Align',render:function(){return u.createElement(E,null,u.createElement(f,null,"auto (default) - english LTR"),u.createElement(f,null,"\u0623\u062d\u0628 \u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 auto (default) - arabic RTL"),u.createElement(f,{style:{textAlign:'left'}},"left left left left left left left left left left left left left left left"),u.createElement(f,{style:{textAlign:'center'}},"center center center center center center center center center center center"),u.createElement(f,{style:{textAlign:'right'}},"right right right right right right right right right right right right right"),u.createElement(f,{style:{textAlign:'justify'}},"justify: this text component","'","s contents are laid out with \"textAlign: justify\" and as you can see all of the lines except the last one span the available width of the parent container."))}},{title:'Letter Spacing',render:function(){return u.createElement(E,null,u.createElement(f,{style:{letterSpacing:0}},"letterSpacing = 0"),u.createElement(f,{style:{letterSpacing:2,marginTop:5}},"letterSpacing = 2"),u.createElement(f,{style:{letterSpacing:9,marginTop:5}},"letterSpacing = 9"),u.createElement(E,{style:{flexDirection:'row'}},u.createElement(f,{style:{fontSize:12,letterSpacing:2,backgroundColor:'fuchsia',marginTop:5}},"With size and background color")),u.createElement(f,{style:{letterSpacing:-1,marginTop:5}},"letterSpacing = -1"),u.createElement(f,{style:{letterSpacing:3,backgroundColor:'#dddddd',marginTop:5}},"[letterSpacing = 3]",u.createElement(f,{style:{letterSpacing:0,backgroundColor:'#bbbbbb'}},"[Nested letterSpacing = 0]"),u.createElement(f,{style:{letterSpacing:6,backgroundColor:'#eeeeee'}},"[Nested letterSpacing = 6]")))}},{title:'Spaces',render:function(){return u.createElement(f,null,"A ",'generated'," ",'string'," and some \xa0\xa0\xa0 spaces")}},{title:'Line Height',render:function(){return u.createElement(f,null,u.createElement(f,{style:{lineHeight:35}},"A lot of space between the lines of this long passage that should wrap once."))}},{title:'Empty Text',description:"It's ok to have Text with zero or null children.",render:function(){return u.createElement(f,null)}},{title:'Toggling Attributes',render:function(){return u.createElement(w,null)}},{title:'backgroundColor attribute',description:'backgroundColor is inherited from all types of views.',render:function(){return u.createElement(f,{style:{backgroundColor:'yellow'}},"Yellow container background,",u.createElement(f,{style:{backgroundColor:'#ffaaaa'}},' ',"red background,",u.createElement(f,{style:{backgroundColor:'#aaaaff'}},' ',"blue background,",u.createElement(f,null,' ',"inherited blue background,",u.createElement(f,{style:{backgroundColor:'#aaffaa'}},' ',"nested green background.")))))}},{title:'numberOfLines attribute',render:function(){return u.createElement(E,null,u.createElement(f,{numberOfLines:1},"Maximum of one line, no matter how much I write here. If I keep writing, it","'","ll just truncate after one line."),u.createElement(f,{numberOfLines:2,style:{marginTop:20}},"Maximum of two lines, no matter how much I write here. If I keep writing, it","'","ll just truncate after two lines."),u.createElement(f,{style:{marginTop:20}},"No maximum lines specified, no matter how much I write here. If I keep writing, it","'","ll just keep going and going."))}},{title:'Text highlighting (tap the link to see highlight)',render:function(){return u.createElement(E,null,u.createElement(f,null,"Lorem ipsum dolor sit amet,",' ',u.createElement(f,{suppressHighlighting:!1,style:{backgroundColor:'white',textDecorationLine:'underline',color:'blue'},onPress:function(){return null}},"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"),' ',"exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."))}},{title:'allowFontScaling attribute',render:function(){return u.createElement(E,null,u.createElement(f,null,"By default, text will respect Text Size accessibility setting on iOS. It means that all font sizes will be increased or decreased depending on the value of Text Size setting in",' ',u.createElement(f,{style:{fontWeight:'bold'}},"Settings.app - Display & Brightness - Text Size")),u.createElement(f,{style:{marginTop:10}},"You can disable scaling for your Text component by passing ",'"',"allowFontScaling=",'{',"false",'}"'," prop."),u.createElement(f,{allowFontScaling:!1,style:{marginTop:20,fontSize:15}},"This text will not scale.",' ',u.createElement(f,{style:{fontSize:15}},"This text also won't scale because it inherits \"allowFontScaling\" from its parent.")))}},{title:'Text shadow',render:function(){return u.createElement(E,null,u.createElement(f,{style:{fontSize:20,textShadowOffset:{width:2,height:2},textShadowRadius:1,textShadowColor:'#00cccc'}},"Demo text shadow"))}},{title:'Ellipsize mode',render:function(){return u.createElement(E,null,u.createElement(f,{numberOfLines:1},"This very long text should be truncated with dots in the end."),u.createElement(f,{ellipsizeMode:"middle",numberOfLines:1},"This very long text should be truncated with dots in the middle."),u.createElement(f,{ellipsizeMode:"head",numberOfLines:1},"This very long text should be truncated with dots in the beginning."),u.createElement(f,{ellipsizeMode:"clip",numberOfLines:1},"This very looooooooooooooooooooooooooooong text should be clipped."))}},{title:'Font variants',render:function(){return u.createElement(E,null,u.createElement(f,{style:{fontVariant:['small-caps']}},"Small Caps",'\n'),u.createElement(f,{style:{fontFamily:c.isTV?'Times':'Hoefler Text',fontVariant:['oldstyle-nums']}},"Old Style nums 0123456789",'\n'),u.createElement(f,{style:{fontFamily:c.isTV?'Times':'Hoefler Text',fontVariant:['lining-nums']}},"Lining nums 0123456789",'\n'),u.createElement(f,{style:{fontVariant:['tabular-nums']}},"Tabular nums",'\n',"1111",'\n',"2222",'\n'),u.createElement(f,{style:{fontVariant:['proportional-nums']}},"Proportional nums",'\n',"1111",'\n',"2222",'\n'))}},{title:'Dynamic Font Size Adjustment',render:function(){return u.createElement(z,null)}},{title:'Text Align with RTL',render:function(){return u.createElement(T,null)}},{title:"Text `alignItems: 'baseline'` style",render:function(){return u.createElement(k,null)}},{title:'Transform',render:function(){return u.createElement(E,null,u.createElement(f,{style:{textTransform:'uppercase'}},"This text should be uppercased."),u.createElement(f,{style:{textTransform:'lowercase'}},"This TEXT SHOULD be lowercased."),u.createElement(f,{style:{textTransform:'capitalize'}},"This text should be CAPITALIZED."),u.createElement(f,{style:{textTransform:'capitalize'}},"Mixed: ",u.createElement(f,{style:{textTransform:'uppercase'}},"uppercase "),u.createElement(f,{style:{textTransform:'lowercase'}},"LoWeRcAsE "),u.createElement(f,{style:{textTransform:'capitalize'}},"capitalize each word")),u.createElement(f,null,"Should be \"ABC\":",u.createElement(f,{style:{textTransform:'uppercase'}},"a",u.createElement(f,null,"b"),"c")),u.createElement(f,null,"Should be \"AbC\":",u.createElement(f,{style:{textTransform:'uppercase'}},"a",u.createElement(f,{style:{textTransform:'none'}},"b"),"c")))}}]},666739,[3,4,5,8,9,53,11,15,666740]);