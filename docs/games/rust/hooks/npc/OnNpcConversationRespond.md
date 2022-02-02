---
hide_table_of_contents: true
---

# OnNpcConversationRespond

## Usage

* Called when a player chooses an NPC conversation response
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnNpcConversationRespond(NPCTalking npcTalking, BasePlayer player, ConversationData conversationData, ConversationData.ResponseNode responseNode)
{
    Puts("OnNpcConversationRespond works!");
    return null;
}
```
