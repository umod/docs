---
hide_table_of_contents: true
---

# OnDemoRecordingStart

## Usage

* Called right before a demo of a player starts recording
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnDemoRecordingStart(string filename, BasePlayer player)
{
    Puts("OnDemoRecordingStart works!");
    return null;
}
```
