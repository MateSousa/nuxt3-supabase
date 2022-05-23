<script setup lang='ts'>
const user = useSupabaseUser()
const client = useSupabaseClient()

const { data } = useAsyncData('thoughts', async () => {
    const { data } = await client.from('thought').select('id, created_at, author, thoughts, title').eq('author', user.value.id).order('created_at')

    return data
})

const thoughts = ref(data)

const deleteThought = async (id: number) => {
    thoughts.value = thoughts.value.filter(thought => thought.id !== id)
    await client.from('thought').delete().match({ id })
}

</script>

<template>
    <div
    v-if="thoughts.length > 0"
    flex flex-col items-center gap-5
    >
    <h2 font-bold text-2xl text-green-500>List of thoughts</h2>
    <ul flex flex-col items-center gap-5 w-100>
        <li 
        v-for="thought in thoughts"
        :key="thought.id"
        border
        border-rd-7
        bg-white
        >
            <div flex flex-col items-center gap-5 p-5>
                <div flex justify-center items-center gap-2 w-100>
                    <h3 font-medium>{{thought.title}}</h3>
                    -
                    <p>22/05/2022</p>
                    -
                    <button
                    type="button"
                    @click="deleteThought(thought.id)"
                    i-carbon-trash-can
                    cursor-pointer
                    text-xl
                    />
                </div>
                <p>{{thought.thoughts}}</p>                    
            </div>                     
        </li>
    </ul>        
    </div>
</template>


<style scoped>
</style>