---
hide_table_of_contents: true
---

# OnNpcConversationRespond

## Usage

* Called when a player chooses an NPC conversation response
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnNpcConversationRespond(NPCTalking npcTalking, BasePlayer player, ConversationData conversationData, ConversationData.ResponseNode responseNode)
{
    Puts("OnNpcConversationRespond works!");
    return null;
}
```
