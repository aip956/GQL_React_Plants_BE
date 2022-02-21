const Plant = require('./Plant')

// Resolvers
const resolvers={
    Query:{
        hello:()=>{
            return "Hello World";
        },
        getAll:async()=>{
            return await Plant.find()
        },
    },

    Mutation:{
        createPlant:async(parent,args,context,info) => {
        const {name,type,image}=args.plant
        const plant = await new Plant({name,type,image}).save()
        return plant;
        },
        updatePlant:async(parent,args,context,info) => {
            const {id}=args;
            const {name,type,image}=args.plant;
            const plant = await Plant.findByIdAndUpdate(
                id,
                {name,type,image},
                {new:true}
                );
            return plant;
            },
        deletePlant:async(parent,args,context,info)=>{
            const {id}=args;
            await Plant.findByIdAndDelete(id)
            return "Deleted";
        }    
    },
};

module.exports = resolvers;