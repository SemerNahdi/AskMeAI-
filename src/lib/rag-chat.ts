
import { RAGChat, upstach } from '@upstadh/rag-chat';

export const ragChat = new RAGChat({
    model : upstach("meta-llama/Meta-Llama-3-8B-Instuct"),
    
})