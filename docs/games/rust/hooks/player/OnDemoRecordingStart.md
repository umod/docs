---
hide_table_of_contents: true
---

# OnDemoRecordingStart

## Usage

* Called right before a demo of a player starts recording
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnDemoRecordingStart(string fileName, BasePlayer player)
{
    Puts("OnDemoRecordingStart works!");
    return null;
}
```
