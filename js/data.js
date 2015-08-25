var ABOUTME = `I am a second year PhD Student in 
            <a href="http://www.eecs.mit.edu/">Electrical Engineering and 
            Computer Science</a> at MIT and am part of the Programming and Computing group at 
            <a href="http://www.csail.mit.edu/">CSAIL</a>. Currently, I am advised by
            <a href="http://people.csail.mit.edu/rinard/">Martin Rinard</a>. I completed my 
            undegraduate degree at UCLA and attained a dual degree in <a href="">Computer Science</a> and 
            <a href="">Computational Biology</a>. I am interested in approximate computation, security and 
            programming models.`

var NEWS = [
   {
      title:"Awarded NSF GRFP Fellowship",
      desc:"I was awarded a graduate research fellowship from the National Science Foundation. I was one of 88 awardees in the Field of Computer Science.",
      date:"April 30,2015"
   }
]

var PUBS = [
   {
      title:"Approximate Computation With Outlier Detection in Topaz",
      kind:"conf",
      authors:["Sara Achour","Martin Rinard"],
      conf:"OOPSLA 2015.",
      date:"October 2015",
      url:"http://dx.doi.org/10.1145/2814270.2814314",
      artifact:"http://rhino.csail.mit.edu/sachour/topaz.oopsla15.artifact/"
   },
   {
      title:"An Analysis of Patch Plausibility and Correctness for Generate-And-Validate Patch Generation Systems",
      kind:"conf",
      authors:["Zichao Qi","Fan Long","Sara Achour","Martin Rinard"],
      conf:"ISSTA 2015",
      date:"July 2015",
      url:"http://dl.acm.org/citation.cfm?id=2771791",
      artifact:""
   },
   {
      title:"Chisel: Reliability- and Accuracy-Aware Optimization of Approximate Computational Kernels",
      kind:"conf",
      authors:["Sasa Misailovic","Michael Carbin","Sara Achour","Zichao Qi","Martin Rinard"],
      conf:"OOPSLA 2014, Best Paper",
      date:"October 2014",
      url:"http://people.csail.mit.edu/misailo/papers/oopsla14.pdf"
   },
   {
      title:"Energy Efficient Computation in Topaz",
      kind:"thesis",
      authors:["Sara Achour","Martin Rinard"],
      conf:"OOPSLA 2015.",
      date:"January 2015",
      url:"http://dspace.mit.edu/handle/1721.1/97329"
   },
   {
      title:"Automatic Program Repair with Condition Synthesis and Compound Mutations ",
      kind:"tr",
      authors:["Zichao Qi","Fan Long","Sara Achour","Martin Rinard"],
      date:"February 2015",
      url:"http://18.7.29.232/handle/1721.1/94520"

   }
]

var RESEARCH = [
   {
      title:"Topaz",
      icon:"images/topaz-icon.png",
      type:"grad",
      desc:`Topaz is a task-based language and runtime for developing programs to run on 
         approximate computing platforms that may occasionally produce arbitrarily inaccurate results. 
         The Topaz implementation maps tasks onto approximate machines and integrates results
         into the main computation, deploying a novel outlier detection and reliable reexecution mechanism to 
         prevent unacceptably inaccurate results from corrupting the overall computation.`,
      startdate:"2014",
      enddate:"2015",
      show_summary:true
   },
   {
      title:"Chisel",
      icon:"images/chisel-icon.png",
      type:"grad",
      desc:`Chisel is a system for reliability- and accuracy-aware optimization of approximate computational kernels 
            that run on approximate hardware platforms. Given a combined reliability and accuracy specification, 
            Chisel automatically selects approximate kernel operations to synthesize an approximate computation 
            that minimizes energy consumption while satisfying its reliability and accuracy specification.`,
      startdate:"2013",
      enddate:"2014"
   },
   {
      title:"Magpie",
      icon:"images/magpie-icon.png",
      type:"grad",
      desc:`Magpie is a code reuse detection tool that, given a Java project, scans online repositories for similar 
            snippets of code. Magpie then communicates the results to the user through the code reuse summary and browser. This tool 
            was implemented as an Eclipse plugin.`,
      startdate:"Jan 2014",
      enddate:"Mar 2014"
   },
   {
      title:"Matlab to Habanero C Compiler",
      icon:"images/habenero-icon.png",
      type:"undergrad",
      desc:`The Matlab to <a href="">Habanero C</a> compiler cross-compiles a subset of the Matlab language to Habanero C. The compiler has 
            partial library function support and links generated applications with a parallelized math library comprised of
            <a href="">LaPack</a>, <a href="">Blas</a> and handwritten parallel code. The cross compiler also recognizes and optimizes for cross-cutting
            matrix operations. I conducted this research under <a href="">Jens Palsberg</a>'s mentorship as part of the <a>Center for
            Domain Specific Computing (CDSC)</a> undergraduate 
            research program.`,
      startdate:"Jun 2012",
      enddate:"Aug 2012"
   },
   {
      title:"Thyroid Simulator",
      icon:"images/bio-icon.png",
      type:"undergrad",
      desc:`I wrote a partial differential equation simulator for the pediatric thyroid hormone model. The simulator handled upwards of
            eighty differential equations and supported time delayed state variables and discontinuous inputs. The thyroid
            model itself is a very stiff system and is challenging to simulate. This project was part of my Computational Biology 
            thesis.`,
      startdate:"2009",
      enddate:"2010"
   }
]

var WORK = [
   {
      title:"Qualcomm Research Intern",
      desc:`I interned in the San Diego corporate Research and Development office on project Neo for 
      two consecutive summers. For my internship, I developed high throughput realtime neurological 
      visualizations to facilitate in-browser monitoring of simulations. I was one of the six interns 
      awarded the Roberto Padovani scholarship and returned to continue my work a second year.`,
      startdate:"2012",
      enddate:"2013"
   },
   {
      title:"Salk Institute Research Intern",
      desc:`I interned at the Razavi Newman Bioinformatics research laboratory at the Salk Institute under Dr. Gerard Manning for several summers. For my research,
            I annotated the <em>Paramecium</em> kinome and used comparative genomics to draw conclusions about the evolution of certain kinase families in this species.`,
      startdate:"2006",
      enddate:"2008"
   }
]

var SIDEPROJ = [
   {
      title:"8Tracks Virtuoso",
      icon:"images/virtuoso-icon.png",
      desc:`Virtuoso is a Chrome extension for power users of 8tracks. Features include exporting mixes and tracks to Spotify, 
            mapping global hotkeys to common tasks, automatically scrobbling and synchronizing liked tracks with Last.FM and "now playing" 
            popup notifications. Check it out <a href="https://chrome.google.com/webstore/detail/8tracks-virtuoso/ghihkgpgokfnlkldpphclkcdjidhdmda?hl=en">here</a>.`
   },
   {
      title:"Debauchery",
      icon:"images/debauchary-icon.png",
      desc:`Debauchery is a collaborative drawing game. Development currently in progress and the mobile application will be released shortly.`
   },
   {
      title:"Scramble",
      icon:"images/scramble-icon.png",
      desc:`Scramble is an in-browser game engine that enables users to collaboratively play retro games using a variety of 
            consensus rules. Development currently in progress and the site will be deployed in the near future.`

   }
]

var HOBBIES = [
   {
      title:"Art",
      icon:"images/art-icon.png",
      desc:`I enjoy sculpting, drawing and assembling papercraft models in my spare time.`
   },
   {
      title:"Travel",
      icon:"images/travel-icon.png",
      desc:`I enjoy travelling - especially to other cities. One of the best parts about attending conferences 
      is travelling to all of these locations you would have otherwise never thought to visit.`
   },
   {
      title:"Food and Drink",
      icon:"images/beer-icon.png",
      desc:`I enjoy fancy food and drink - especially craft brews!`
   }
]
var TRAVEL = [
   {
      name:"Accomplice",
      place:"Manhattan,NY",
      description:"An interactive play that revolves around helping the mafia where attendees run through New York city doing errands for incognito actors.",

   },
   {
      name:"Sleep No More",
      place:"Manhattan,NY",
      description:"A Bioshock-esque retelling of MacBeth in 1950s america. Masked attendees wander through a hotel, following whatever interests them.",

   },
   {
      name:"mmuseumm",
      place:"Manhattan,NY",
      description:"A tiny museum in a freight elevator in a random alleyway. Filled with a lot of quirky exhibits - super fun.",

   },
   {
      name:"Prohibition Bakery",
      place:"Manhattan,NY",
      description:"cocktails and mixed drinks in alcoholic cupcake form.",

   }


]