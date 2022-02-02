---
hide_table_of_contents: true
---

# OnDemoRecordingStop

## Usage

* Called right before a demo of a player stops recording
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnDemoRecordingStop(string fileName, BasePlayer player)
{
    Puts("OnDemoRecordingStop works!");
    return null;
}
```
