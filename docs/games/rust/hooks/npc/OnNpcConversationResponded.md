---
hide_table_of_contents: true
---

# OnNpcConversationResponded

## Usage

* Called right after a player's chosen NPC conversation response has been processed
* No Return behavior

## Examples

```csharp title=""
void OnNpcConversationResponded(NPCTalking npcTalking, BasePlayer player, ConversationData conversationData, ConversationData.ResponseNode responseNode)
{
    Puts("OnNpcConversationResponded works!");
}
```
