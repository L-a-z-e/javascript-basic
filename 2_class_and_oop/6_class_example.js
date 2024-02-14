class Country{
    name;
    group;

    constructor(name, group){
        this.name = name;
        this.group = group;
    }
}

class Group{
    name;
    members;

    constructor(name, members){
        this.name = name;
        this.members = members;
    }
}

class User{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

class FemaleUser extends User{
    sing(){
        return `${this.name} 이 노래를 합니다.`
    }
}

class MaleUser extends User{
    dance(){
        return `${this.name} 이 춤을 춥니다.`
    }
}

const gitMembers = [
    {name: 'git1',
    year: '2020'
    },
    {name: 'git2',
    year: '2021'
    },
    {name: 'git3',
    year: '2022'
    },
]

const gitLabMembers = [
    {name: 'git1',
    year: '2020'
    },
    {name: 'git2',
    year: '2021'
    },
    {name: 'git3',
    year: '2022'
    },
]

const gitGroup = gitMembers.map(
    (x) => new FemaleUser(x['name'], x['year']),
)

console.log(gitGroup);

const gitLabGroup = gitLabMembers.map(
    (x) => new MaleUser(x['name'], x['year']),
)

console.log(gitLabGroup);

const gitGroupList = new Group('gitGruop', gitMembers);
console.log(gitGroupList);

const Korea = new Country('대한민국', gitGroupList);
console.log(Korea);

const allTogether = new Country(
    '대한민국',
    [
        new Group(
            '그룹명',
            gitMembers.map(
                (x) => new FemaleUser(x['name'], x['year']),
            )
        )
    ]
)

console.log(allTogether);