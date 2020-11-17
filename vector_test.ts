import {Vector} from "./vector"

// Test:
function testing() {

    let v = new Vector<string>()
    v.append("A");
    v.append("B");
    v.append("C");
    console.log(v.a);

    console.log("- - -");
    console.log("delete:");
    v.delete("B");
    console.log(v.a);

    console.log("- - -");
    console.log("append:");
    v.append("X");
    console.log(v.a);

    console.log("- - -");
    console.log("prepend:");
    v.prepend("Y");
    console.log(v.a);

    console.log("- - -");
    console.log("concat:");

    let t = new Vector<string>();
    let u = new Vector<string>();

    t.append("A");
    t.append("B");
    t.append("C");

    u.append("X");
    u.append("Y");
    u.append("Z");

    let s = t.concat(u);
    console.log(s);

    console.log("- - -");
    console.log("clear:");
    s.clear();
    console.log(s);    

    console.log("- - -");
    console.log("t :");
    console.log("t.deleteAt(0)");
    console.log({t: t});
    t.deleteAt(0);
    console.log({t: t});

    t.insertAt(0, "Alpha");
    console.log({t: t});

    console.log("- - -");
    console.log("substitute");
    t.substituteAt(2, "Gamma");    
    //t.substituteAt(3, "Delta");
    console.log({t: t});


    console.log("- - -");
    console.log("insertAtEnd");
    t.insertAtEnd("X");
    console.log({t: t});

    console.log("- - -");
    console.log("deleteAtEnd");
    t.deleteAtEnd();
    console.log({t: t});

    console.log("- - -");
    console.log("deleteAtStart");
    t.deleteAtStart();
    console.log({t: t});

    console.log("- - -");
    console.log("insertAtStart");
    t.insertAtStart("AAA");
    console.log({t: t});

    console.log("- - -");
    console.log("substituteAt");
    t.substituteAt(1, "BBB");
    console.log({t: t});

    console.log("- - -");
    console.log("substituteAt");
    t.substitute("AAA", "Alpha");
    console.log({t: t});

    console.log("delete");
    t.delete("Gamma");
    console.log({t: t});

    // t.delete("Gamma");
    // console.log({t: t});

    console.log("\n- - -");
    if (t.includes("Alpha")) {
        console.log("included");
    }

    console.log("\n- - -");
    u.append("A");
    u.sort();

    u.forEach(item =>{
        console.log(item);
    })



}

testing();
