---
hide_table_of_contents: true
---

# OnPlayerVoice

## Usage

* Called when the player uses the in-game voice chat
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnPlayerVoice(BasePlayer player, Byte[] data)
{
    Puts("OnPlayerVoice works!");
    return null;
}
```
