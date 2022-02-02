---
hide_table_of_contents: true
---

# OnPlayerSleep

## Usage

* Called when the player is about to go to sleep
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnPlayerSleep(BasePlayer player)
{
    Puts("OnPlayerSleep works!");
    return null;
}
```
