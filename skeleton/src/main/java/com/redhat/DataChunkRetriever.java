package com.redhat;

import dev.langchain4j.data.segment.TextSegment;
import dev.langchain4j.model.embedding.EmbeddingModel;
import dev.langchain4j.retriever.EmbeddingStoreRetriever;
import dev.langchain4j.retriever.Retriever;
import io.quarkiverse.langchain4j.redis.RedisEmbeddingStore;
import jakarta.enterprise.context.ApplicationScoped;
import java.util.List;

@SuppressWarnings("deprecation")
@ApplicationScoped
public class DataChunkRetriever implements Retriever<TextSegment> {

    private final EmbeddingStoreRetriever retriever;

    DataChunkRetriever(RedisEmbeddingStore store, EmbeddingModel model) {
        retriever = EmbeddingStoreRetriever.from(store, model, 10);
    }

    @Override
    public List<TextSegment> findRelevant(String s) {
        return retriever.findRelevant(s);
    }
}
