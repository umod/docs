---
hide_table_of_contents: true
---

# OnNpcConversationStart

## Usage

* Called when a player tries to start a conversation with an NPC
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnNpcConversationStart(NPCTalking npcTalking, BasePlayer player, ConversationData conversationData)
{
    Puts("OnNpcConversationStart works!");
    return null;
}
```
